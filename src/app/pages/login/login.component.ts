import { Component, Inject, OnInit, AfterViewInit, trigger, transition, animate, style, state } from '@angular/core';
import {  Router } from '@angular/router';
import {OAppConfig, APP_CONFIG, IAppConfig} from '../../config.service';

import {ISignInModel} from './model/signin.model';

@Component({
    selector: 'login',
    templateUrl: './template/login.template.html',

})
export class LoginComponent {

    signinModel: ISignInModel = {
        username: '',
        password: '',
        rememberMe: false
    }

    constructor(
        @Inject(OAppConfig) private appConfig: IAppConfig,
        private router: Router
    ) {

    }

    signin() {
        console.log(this.signinModel);
    }
}
