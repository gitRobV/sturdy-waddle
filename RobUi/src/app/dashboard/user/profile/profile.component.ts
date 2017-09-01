import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from './../../../api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    @Input() userInfo;
    profile = {
        _id: '',
        fName: '',
        lName: '',
        email: '',
        new: true
    }

    users = [];

    view = {
        users: false,
        edit: false
    }

    constructor(private _apiService: ApiService, private _router: Router) { }

    ngOnInit() {
        this.checkUserProfile();
        this.getActiveUsers();
    }

    getActiveUsers() {
        this._apiService.getAllUsers()
        .then((response) => {
           this.users = response;
        })
        .catch((error) => {
            console.log(error);
        });
    }
    
    checkUserProfile() {
        this._apiService.getUserProfile()
            .then((response) => {
                if(response.data == null) {
                    this.profile.email = this.userInfo.email;
                    this.view.edit = true;
                } else {
                    this.profile.email = this.userInfo.email;
                    this.profile._id = response.data._id;
                    this.profile.fName = response.data.fName;
                    this.profile.lName = response.data.lName;
                    this.view.edit = false;
                    this.profile.new = false; 
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    profileFormHandler(profile_info){
        if(profile_info.new) {
            this.createProfile(profile_info);
            this.checkUserProfile();
        } else {
            this.updateProfile(profile_info);
            this.checkUserProfile();
        }
    }

    createProfile(profile_info) {
        this._apiService.createUserProfile(profile_info)
        .then((response) => {
            this.checkUserProfile();
        })
        .catch((error) => {
            console.log(error);
        });
    }

    updateProfile(profile_info) {
        this._apiService.updateUserProfile(profile_info)
        .then((response) => {
            if(response.status) {
                this.checkUserProfile();
            } 
        })
        .catch((error) => {
            console.log(error);
        });
    }

    toggleEdit() {
        this.view.edit = !this.view.edit;
    }

    toggleUsers() {
        this.view.users = !this.view.users;
    }

}
