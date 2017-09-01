import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

    authorizedUser = false;

    constructor(private _apiService: ApiService, private _router: Router) { }

    ngOnInit() {
        this.checkCurrentUser();
    }

    checkCurrentUser() {
        this._apiService.getCurrentUser()
		.then((response) => {
            if(response.status) {
                this.authorizedUser = true;
            } else {
                this.authorizedUser = false;
            }
		})
		.catch((error) => {
            console.log(error);
		});
    }

    logout() {
		this._apiService.logout()
		.then((response) => {
            this.checkCurrentUser();
            this._router.navigate(['/']);
		})
		.catch((error) => {
			console.log(error)
		});
	}

}
