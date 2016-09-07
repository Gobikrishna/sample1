import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './pages/home/home.component';
import {LoginComponent} from './pages/login/login.component';

const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
];

export const routing = RouterModule.forRoot(appRoutes);