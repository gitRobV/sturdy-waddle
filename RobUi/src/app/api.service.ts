import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {

    constructor(private _http: Http) { }

    getCurrentUser() {
        return this._http.get('/api/getUser').map(Response => Response.json()).toPromise()
    }

    authUser(user_info) {
        return this._http.post('/api/authUser', user_info).map(Response => Response.json()).toPromise()
    }

    regUser(user_info) {
        return this._http.post('/api/regUser', user_info).map(Response => Response.json()).toPromise()
    }
    logout() {
		return this._http.get('/api/logout').map(Response => Response.json()).toPromise()
    }
    
    getUserProfile() {
        return this._http.get('/api/profile/getCurrProfile').map(Response => Response.json()).toPromise()
    }

    createUserProfile(profile_info) {
        return this._http.post('/api/profile/createUserProfile', profile_info).map(Response => Response.json()).toPromise()
    }

    updateUserProfile(profile_info) {
        return this._http.post('/api/profile/updateUserProfile', profile_info).map(Response => Response.json()).toPromise()
    }

    getAllUsers() {
        return this._http.get('/api/profile/getAllUsers').map(Response => Response.json()).toPromise()
    }

}
