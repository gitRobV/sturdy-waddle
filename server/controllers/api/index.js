const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = mongoose.model('User');

class Payload {
    constructor(status=false, errArr=[], dataObj={}) {
        this.error = errArr;
        this.data = dataObj;
        this.status = status;
      }
}

module.exports = {
    getUser: (req, res) => {
        if(!req.session.user) {
            let response = new Payload(false, ['Please Log In to Continue!']);
            res.json(response);
        } else {
            let response = new Payload(true, null, req.session.user);
            res.json(response);
        }
    },
    regUser: (req, res) => {
        let response = new Payload();
        let newUser = req.body;
        newUser.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8));
        User.create(newUser, (err, createdUser) => {
            if(err) {
                response.status = false;
                response.error.push('There Was an issue Creating your User. Please Try Again.');
                response.error.push(err);
                res.json(response);
            } else {
                req.session.user = createdUser;
                response.status = true;
                response.data = createdUser
                res.json(response);
            }
        });
    },
    authUser: (req, res) => {
        let response = new Payload();
        let existingUser = req.body;
        let check_email = req.body.email;
        let check_password = req.body.password;
        User.findOne({email: check_email}, (err, userInfo) => {
            if (err) {
                response.status = false;
                response.error.push('There was an issue with finding your user.');
                response.error.push(err);
                res.json(response);
            } else {
                let user_hash = userInfo.password;
                if (bcrypt.compareSync(check_password, user_hash)) {
                    userInfo.password = null;
                    req.session.user = userInfo;
                    response.status = true;
                    response.data = userInfo;
                    res.json(response);
                } else {
                    response.status = false;
                    response.error.push('There was an issue with The password you submitted.');
                    response.error.push(err);
                    res.json(response);
                }
            }
        });
    },
    logout: (req, res) => {
        let response = new Payload();
        req.session.destroy(function(err) {
            if(err) {
                response.status = false;
                response.error.push('There was an issue logging you out.');
                response.error.push(err);
                res.json(response);
            } else {
                response.status = true;
                res.json(response);
            }
        });
    }
}
