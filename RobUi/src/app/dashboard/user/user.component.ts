import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    user = {};
    authorizedUser = false;

    constructor(private _apiService: ApiService, private _router: Router) { }

    ngOnInit() {
        this.checkCurrentUser();
    }

    checkCurrentUser() {
        this._apiService.getCurrentUser()
            .then((response) => {
                if (response.status) {
                    this.user = response.data;
                    this.authorizedUser = true;   
                } else {
                    this.authorizedUser = false;
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

}
