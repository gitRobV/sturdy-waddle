import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { Router, ActivatedRoute } from '@angular/router';

import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    animations: [
        trigger('fade', [
            transition('void => *', [
                style({opacity: 0}),
                animate(2000)
            ])
        ])
    ]
})

export class DashboardComponent implements OnInit {

    constructor(private _apiService: ApiService, private _router: Router) { }

    ngOnInit() {
    }

    

}
