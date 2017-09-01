import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

    currStatus = {
        register: false,
        action: 'Log In'
    };
    authorizedUser = false;
    user = {
        email: '',
        password: '',
        confirm_pw: ''
    };

    constructor(private _apiService: ApiService, private _router: Router) { }

    ngOnInit() {
        this.checkCurrentUser();
    }

    checkCurrentUser() {
        this._apiService.getCurrentUser()
		.then((response) => {
            if(response.status) {
                this.user = response.data.user;
                this.authorizedUser = true;
                this._router.navigate(['/dashboard']);
            } else {
                this.authorizedUser = false;
            }
		})
		.catch((error) => {
            console.log(error);
		});
    }

    toggle(reg) {
        if (reg) {
            this.currStatus.action = 'Register';
        } else {
            this.currStatus.action = 'Log In';
        }
    }

    authFormHandler(register_info){
        console.log('Auth form Handler');
        
        if(register_info){
            this.regUser(this.user);
            this.checkCurrentUser();
        } else {
            this.authUser(this.user);
            this.checkCurrentUser();
        }
    }

    authUser(user_info) {
        // Call api Service to Authenticate User
		this._apiService.authUser(user_info)
		.then((response) => {
            if(response.status) {
                this.user = response.data;
                this.authorizedUser = true;
                this._router.navigate(['/dashboard']);
            } else {
                this.authorizedUser = false;
                this.currStatus.register = false;
                this.currStatus.action = 'Log In'
            }
		})
		.catch((error) => {
			console.log(error)
		});
    }

    regUser(user_info) {
        this._apiService.regUser(user_info)
		.then((response) => {
            console.log(response);
            
            if(response.status){
                this.authorizedUser = true;
                this._router.navigate(['/dashboard']);
            } else {
                this.authorizedUser = false;
                this.currStatus.register = true;
                this.currStatus.action = 'Register'
                this._router.navigate(['/']);
            }
		})
		.catch((error) => {
			console.log(error)
		});
    }
}
