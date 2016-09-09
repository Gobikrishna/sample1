import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './pages/home/home.component';
import {LoginComponent} from './pages/login/login.component';
import { PersonalDetailComponent } from './pages/personal-detail/personal-detail.component';

const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'personal-detail',
        component: PersonalDetailComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
];

export const routing = RouterModule.forRoot(appRoutes);