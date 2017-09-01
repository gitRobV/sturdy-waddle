import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './dashboard/user/user.component';
import { ProjectsComponent } from "./dashboard/projects/projects.component";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: AuthComponent
    },
    {
        path: 'dashboard',
        component:DashboardComponent,
        children: [
            {
                path:'user',
                component: UserComponent,
                children: [
                    
                ]
            },
            {
                path: 'projects',
                component: ProjectsComponent
            }
        ],
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
