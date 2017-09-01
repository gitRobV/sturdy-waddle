import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ApiService } from './api.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './nav/nav.component';
import { UserComponent } from './dashboard/user/user.component';
import { ProfileComponent } from './dashboard/user/profile/profile.component';
import { ProjectsComponent } from './dashboard/projects/projects.component';


@NgModule({
    declarations: [
        AppComponent,
        AuthComponent,
        DashboardComponent,
        NavComponent,
        UserComponent,
        ProfileComponent,
        ProjectsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpModule,
        BrowserAnimationsModule
    ],
    providers: [ApiService],
    bootstrap: [AppComponent]
})
export class AppModule { }
