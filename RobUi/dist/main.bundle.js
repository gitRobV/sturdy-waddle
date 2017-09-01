webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApiService = (function () {
    function ApiService(_http) {
        this._http = _http;
    }
    ApiService.prototype.getCurrentUser = function () {
        return this._http.get('/api/getUser').map(function (Response) { return Response.json(); }).toPromise();
    };
    ApiService.prototype.authUser = function (user_info) {
        return this._http.post('/api/authUser', user_info).map(function (Response) { return Response.json(); }).toPromise();
    };
    ApiService.prototype.regUser = function (user_info) {
        return this._http.post('/api/regUser', user_info).map(function (Response) { return Response.json(); }).toPromise();
    };
    ApiService.prototype.logout = function () {
        return this._http.get('/api/logout').map(function (Response) { return Response.json(); }).toPromise();
    };
    ApiService.prototype.getUserProfile = function () {
        return this._http.get('/api/profile/getCurrProfile').map(function (Response) { return Response.json(); }).toPromise();
    };
    ApiService.prototype.createUserProfile = function (profile_info) {
        return this._http.post('/api/profile/createUserProfile', profile_info).map(function (Response) { return Response.json(); }).toPromise();
    };
    ApiService.prototype.updateUserProfile = function (profile_info) {
        return this._http.post('/api/profile/updateUserProfile', profile_info).map(function (Response) { return Response.json(); }).toPromise();
    };
    ApiService.prototype.getAllUsers = function () {
        return this._http.get('/api/profile/getAllUsers').map(function (Response) { return Response.json(); }).toPromise();
    };
    return ApiService;
}());
ApiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ApiService);

var _a;
//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_component__ = __webpack_require__("../../../../../src/app/auth/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_user_user_component__ = __webpack_require__("../../../../../src/app/dashboard/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_projects_projects_component__ = __webpack_require__("../../../../../src/app/dashboard/projects/projects.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        pathMatch: 'full',
        component: __WEBPACK_IMPORTED_MODULE_2__auth_auth_component__["a" /* AuthComponent */]
    },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */],
        children: [
            {
                path: 'user',
                component: __WEBPACK_IMPORTED_MODULE_4__dashboard_user_user_component__["a" /* UserComponent */],
                children: []
            },
            {
                path: 'projects',
                component: __WEBPACK_IMPORTED_MODULE_5__dashboard_projects_projects_component__["a" /* ProjectsComponent */]
            }
        ],
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_auth_component__ = __webpack_require__("../../../../../src/app/auth/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__nav_nav_component__ = __webpack_require__("../../../../../src/app/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dashboard_user_user_component__ = __webpack_require__("../../../../../src/app/dashboard/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dashboard_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/dashboard/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dashboard_projects_projects_component__ = __webpack_require__("../../../../../src/app/dashboard/projects/projects.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__auth_auth_component__["a" /* AuthComponent */],
            __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_10__nav_nav_component__["a" /* NavComponent */],
            __WEBPACK_IMPORTED_MODULE_11__dashboard_user_user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_12__dashboard_user_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_13__dashboard_projects_projects_component__["a" /* ProjectsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__api_service__["a" /* ApiService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.wrapper {\r\n    margin-top: 20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/auth.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<div class=\"wrapper\">\n    <div class=\"row\">\n        <div class=\"col-sm-4 offset-sm-4\" *ngIf=\"!authorizedUser\">\n            <div class=\"card\">\n                <div class=\"card-block\">\n                    <h2 class=\"card-title\">{{ currStatus.action }}</h2>\n                    <form (submit)=\"authFormHandler(currStatus.register)\">\n                        <div class=\"form-group\">\n                            <label class=\"sr-only\" for=\"email\">Email address</label>\n                            <input type=\"email\" name=\"email\" id=\"email\" [(ngModel)]=\"user.email\" #email=\"ngModel\" class=\"form-control\" placeholder=\"Enter email\">\n                        </div>\n                        <div class=\"form-group\">\n                            <label class=\"sr-only\" for=\"password\">Password</label>\n                            <input type=\"password\" name=\"password\" id=\"password\" [(ngModel)]=\"user.password\" #password=\"ngModel\" class=\"form-control\"\n                                placeholder=\"Password\">\n                        </div>\n                        <div class=\"form-group\" *ngIf=\"currStatus.register\">\n                            <label class=\"sr-only\" for=\"confirm_pw\">Confirm Password</label>\n                            <input type=\"password\" name=\"confirm_pw\" id=\"confirm_pw\" [(ngModel)]=\"user.confirm_pw\" #confirm_pw=\"ngModel\" class=\"form-control\"\n                                placeholder=\"Confirm Password\">\n                        </div>\n                        <div class=\"form-check\">\n                            <label (click)=\"toggle(!currStatus.register)\" class=\"form-check-label\">\n                                <input class=\"form-check-input\" name=\"register\" type=\"checkbox\"\n                                [(ngModel)]=\"currStatus.register\"\n                                #register=\"ngModel\"\n                                value=\"true\">\n                                Are you a New User? \n                            </label>\n                        </div>\n                        <button type=\"submit\" class=\"btn btn-primary\">{{ currStatus.action }}</button>\n                    </form>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-8 offset-md-2\" *ngIf=\"authorizedUser\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/auth/auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthComponent = (function () {
    function AuthComponent(_apiService, _router) {
        this._apiService = _apiService;
        this._router = _router;
        this.currStatus = {
            register: false,
            action: 'Log In'
        };
        this.authorizedUser = false;
        this.user = {
            email: '',
            password: '',
            confirm_pw: ''
        };
    }
    AuthComponent.prototype.ngOnInit = function () {
        this.checkCurrentUser();
    };
    AuthComponent.prototype.checkCurrentUser = function () {
        var _this = this;
        this._apiService.getCurrentUser()
            .then(function (response) {
            if (response.status) {
                _this.user = response.data.user;
                _this.authorizedUser = true;
                _this._router.navigate(['/dashboard']);
            }
            else {
                _this.authorizedUser = false;
            }
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    AuthComponent.prototype.toggle = function (reg) {
        if (reg) {
            this.currStatus.action = 'Register';
        }
        else {
            this.currStatus.action = 'Log In';
        }
    };
    AuthComponent.prototype.authFormHandler = function (register_info) {
        console.log('Auth form Handler');
        if (register_info) {
            this.regUser(this.user);
            this.checkCurrentUser();
        }
        else {
            this.authUser(this.user);
            this.checkCurrentUser();
        }
    };
    AuthComponent.prototype.authUser = function (user_info) {
        var _this = this;
        // Call api Service to Authenticate User
        this._apiService.authUser(user_info)
            .then(function (response) {
            if (response.status) {
                _this.user = response.data;
                _this.authorizedUser = true;
                _this._router.navigate(['/dashboard']);
            }
            else {
                _this.authorizedUser = false;
                _this.currStatus.register = false;
                _this.currStatus.action = 'Log In';
            }
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    AuthComponent.prototype.regUser = function (user_info) {
        var _this = this;
        this._apiService.regUser(user_info)
            .then(function (response) {
            console.log(response);
            if (response.status) {
                _this.authorizedUser = true;
                _this._router.navigate(['/dashboard']);
            }
            else {
                _this.authorizedUser = false;
                _this.currStatus.register = true;
                _this.currStatus.action = 'Register';
                _this._router.navigate(['/']);
            }
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    return AuthComponent;
}());
AuthComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-auth',
        template: __webpack_require__("../../../../../src/app/auth/auth.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/auth.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthComponent);

var _a, _b;
//# sourceMappingURL=auth.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sidebar {\r\n    width: 10%;\r\n    height: 100%;\r\n    display: inline-block;\r\n    vertical-align: top;\r\n}\r\n\r\n.sidebar a.icon {\r\n    text-align: center; \r\n    display: block; \r\n    padding:10px 25px;\r\n    font-size: 3em;\r\n    text-decoration: none;\r\n    color: whitesmoke;\r\n    background-color: #464646;\r\n}\r\n\r\n.sidebar a.icon:hover {\r\n    background-color: white;\r\n    color: #616161;\r\n}\r\n\r\n.dash_content {\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    width:90%;\r\n    height: 100%;\r\n    color: #616161;\r\n    background-color: #3C3C3C;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<div class=\"sidebar\">\n    <a @fade [routerLink]=\"['/dashboard', 'user']\" class=\"icon\"><i class=\"fa fa-users\" aria-hidden=\"true\"></i></a>\n    <a @fade [routerLink]=\"['/dashboard', 'projects']\" class=\"icon\"><i class=\"fa fa-flask\" aria-hidden=\"true\"></i></a>\n    <a @fade [routerLink]=\"['/dashboard']\" class=\"icon\"><i class=\"fa fa-github\" aria-hidden=\"true\"></i></a>\n    <a @fade [routerLink]=\"['/dashboard']\" class=\"icon\"><i class=\"fa fa-tasks\" aria-hidden=\"true\"></i></a>\n    <a @fade [routerLink]=\"['/dashboard']\" class=\"icon\"><i class=\"fa fa-rocket\" aria-hidden=\"true\"></i></a>      \n</div><div class=\"dash_content\"><router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = (function () {
    function DashboardComponent(_apiService, _router) {
        this._apiService = _apiService;
        this._router = _router;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* trigger */])('fade', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* transition */])('void => *', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* style */])({ opacity: 0 }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["k" /* animate */])(2000)
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], DashboardComponent);

var _a, _b;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/projects/projects.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  projects works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectsComponent = (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    return ProjectsComponent;
}());
ProjectsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-projects',
        template: __webpack_require__("../../../../../src/app/dashboard/projects/projects.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/projects/projects.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProjectsComponent);

//# sourceMappingURL=projects.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/user/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, " .userOptions {\r\n    width: 20%;\r\n    background-color: #fafafa;\r\n    text-align: center;\r\n    \r\n    display: inline-block;\r\n    vertical-align: top;\r\n }\r\n\r\n .userOptions div {\r\n    border-top: solid 2px #ddd;\r\n    border-bottom: solid 1px #fff;\r\n     padding: 25px;\r\n }\r\n\r\n .editProfile {\r\n     width:30%;\r\n     display: inline-block;\r\n     vertical-align: top;\r\n     padding: 25px;\r\n     background-color: #fff;\r\n     border-left: solid 10px rgb(6, 194, 48)\r\n }\r\n\r\n .userList {\r\n    width:30%;\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    background-color: #fff;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"userOptions\">\n<div class=\"profile\">\n    <h4 class=\"title\">{{ profile.fName }} {{ profile.lName }}</h4>\n    <p class=\"text\">{{ profile.email }}</p>\n    <button (click)=\"toggleEdit()\" class=\"btn\">Edit Profile</button>\n</div>\n<div class=\"users\" >\n    <h4 (click)=\"toggleUsers()\" class=\"title\">All Users | <span class=\"badge badge-default badge-pill\">{{ users.length }}</span></h4>\n</div>\n<ul class=\"list-group\" *ngIf=\"view.users\">\n    <li *ngFor=\"let user of users\" class=\"list-group-item list-group-item-action\">{{ user.fName }} {{ user.lName }}</li>\n</ul>\n<div class=\"manage\">\n    <h4 class=\"title\">Manage Users</h4>\n    <p class=\"text\">coming soon</p>\n</div>\n</section><section *ngIf=\"view.edit\" class=\"editProfile\">\n    <form (submit)=\"profileFormHandler(profile)\">\n        <fieldset>\n            <legend>Edit Profile</legend>\n            <div class=\"form-group\">\n                <label for=\"fName\">First Name</label>\n                <input type=\"text\" name=\"fName\" id=\"fName\" [(ngModel)]=\"profile.fName\" #fName=\"ngModel\" class=\"form-control\" placeholder=\"First Name\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"lName\">Last Name</label>\n                <input type=\"text\" name=\"lName\" id=\"lName\" [(ngModel)]=\"profile.lName\" #lName=\"ngModel\" class=\"form-control\" placeholder=\"Last Name\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"email\">Email address</label>\n                <input type=\"email\" disabled name=\"email\" id=\"email\" [(ngModel)]=\"profile.email\" #email=\"ngModel\" class=\"form-control\" placeholder=\"Enter email\">\n            </div>\n            <button (click)=\"toggleEdit()\" class=\"btn\">Cancel</button>\n            <button type=\"submit\" class=\"btn primary\">Save</button>\n        </fieldset> \n    </form>\n</section><section class=\"userList\">\n    \n</section>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(_apiService, _router) {
        this._apiService = _apiService;
        this._router = _router;
        this.profile = {
            _id: '',
            fName: '',
            lName: '',
            email: '',
            new: true
        };
        this.users = [];
        this.view = {
            users: false,
            edit: false
        };
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.checkUserProfile();
        this.getActiveUsers();
    };
    ProfileComponent.prototype.getActiveUsers = function () {
        var _this = this;
        this._apiService.getAllUsers()
            .then(function (response) {
            _this.users = response;
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    ProfileComponent.prototype.checkUserProfile = function () {
        var _this = this;
        this._apiService.getUserProfile()
            .then(function (response) {
            if (response.data == null) {
                _this.profile.email = _this.userInfo.email;
                _this.view.edit = true;
            }
            else {
                _this.profile.email = _this.userInfo.email;
                _this.profile._id = response.data._id;
                _this.profile.fName = response.data.fName;
                _this.profile.lName = response.data.lName;
                _this.view.edit = false;
                _this.profile.new = false;
            }
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    ProfileComponent.prototype.profileFormHandler = function (profile_info) {
        if (profile_info.new) {
            this.createProfile(profile_info);
            this.checkUserProfile();
        }
        else {
            this.updateProfile(profile_info);
            this.checkUserProfile();
        }
    };
    ProfileComponent.prototype.createProfile = function (profile_info) {
        var _this = this;
        this._apiService.createUserProfile(profile_info)
            .then(function (response) {
            _this.checkUserProfile();
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    ProfileComponent.prototype.updateProfile = function (profile_info) {
        var _this = this;
        this._apiService.updateUserProfile(profile_info)
            .then(function (response) {
            if (response.status) {
                _this.checkUserProfile();
            }
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    ProfileComponent.prototype.toggleEdit = function () {
        this.view.edit = !this.view.edit;
    };
    ProfileComponent.prototype.toggleUsers = function () {
        this.view.users = !this.view.users;
    };
    return ProfileComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], ProfileComponent.prototype, "userInfo", void 0);
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/dashboard/user/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/user/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ProfileComponent);

var _a, _b;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "app-profile {\r\n    width: 25%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-profile [userInfo]='user'></app-profile>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserComponent = (function () {
    function UserComponent(_apiService, _router) {
        this._apiService = _apiService;
        this._router = _router;
        this.user = {};
        this.authorizedUser = false;
    }
    UserComponent.prototype.ngOnInit = function () {
        this.checkCurrentUser();
    };
    UserComponent.prototype.checkCurrentUser = function () {
        var _this = this;
        this._apiService.getCurrentUser()
            .then(function (response) {
            if (response.status) {
                _this.user = response.data;
                _this.authorizedUser = true;
            }
            else {
                _this.authorizedUser = false;
            }
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    return UserComponent;
}());
UserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-user',
        template: __webpack_require__("../../../../../src/app/dashboard/user/user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/user/user.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], UserComponent);

var _a, _b;
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-inverse bg-inverse\">\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n        aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <a class=\"navbar-brand\" href=\"#\">RobUI</a>\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav ml-auto my-2 my-lg-0\">\n            <li class=\"nav-item\" *ngIf=\"authorizedUser\">\n                <a class=\"nav-link\" (click)=\"logout()\">Log Out</a>\n            </li>\n        </ul>\n    </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavComponent = (function () {
    function NavComponent(_apiService, _router) {
        this._apiService = _apiService;
        this._router = _router;
        this.authorizedUser = false;
    }
    NavComponent.prototype.ngOnInit = function () {
        this.checkCurrentUser();
    };
    NavComponent.prototype.checkCurrentUser = function () {
        var _this = this;
        this._apiService.getCurrentUser()
            .then(function (response) {
            if (response.status) {
                _this.authorizedUser = true;
            }
            else {
                _this.authorizedUser = false;
            }
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    NavComponent.prototype.logout = function () {
        var _this = this;
        this._apiService.logout()
            .then(function (response) {
            _this.checkCurrentUser();
            _this._router.navigate(['/']);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    return NavComponent;
}());
NavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-nav',
        template: __webpack_require__("../../../../../src/app/nav/nav.component.html"),
        styles: [__webpack_require__("../../../../../src/app/nav/nav.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], NavComponent);

var _a, _b;
//# sourceMappingURL=nav.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map