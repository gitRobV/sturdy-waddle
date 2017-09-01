const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = mongoose.model('User');
const Profile = mongoose.model('Profile');

class Payload {
    constructor(status=false, errArr=[], dataObj={}) {
        this.error = errArr;
        this.data = dataObj;
        this.status = status;
      }
}

module.exports = {
    getUserProfile: (req, res) => {
        console.log('Here!');
        let response = new Payload();
        let user_id = req.session.user._id;
        Profile.findOne({'_user': user_id}, (err, selectedProfile) => {
            if(err) {
                response.error.push('There Was a problem retrieving your Profile. Details: ' + err);
                response.status = false;
                res.json(response);
            } else {
                response.data = selectedProfile;
                response.status = true;
                console.log(selectedProfile);
                res.json(response)
            }
        });
    },
    createUserProfile: (req, res) => {
        let profile = new Profile(req.body);
        profile._user = req.session.user._id;
        profile.save();
        res.json(true);
    },

    updateUserProfile: (req, res) => {
        let response = new Payload();
        Profile.findOne({'_id': req.body._id}, (err, selectedProfile) => {
            if(err) {
                response.error.push('There was an issue finding your Profile. Details: ' + err);
                response.status = false;
                res.json(response);
            } else {
                let updatedProfile = selectedProfile;
                selectedProfile.fName = req.body.fName;
                selectedProfile.lName = req.body.lName;
                selectedProfile.save();
                response.status = true;
                response.data = selectedProfile;
                res.json(response);
            }
        })
    },
    getAllUsers: (req, res) => {
        Profile.find({}, (err, activeUsers) => {
            if(err) {
                console.log('errors and stuff ',err);
                res.json(false);
            } else {
                res.json(activeUsers);
            }
        });
    }


}