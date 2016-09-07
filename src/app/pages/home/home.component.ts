import { Component, Inject, OnInit, AfterViewInit, trigger, transition, animate, style, state } from '@angular/core';
import {  Router } from '@angular/router';
import {OAppConfig, APP_CONFIG, IAppConfig} from '../../config.service';

@Component({
    selector: 'home',
    templateUrl: './template/home.template.html',

})
export class HomeComponent {

    constructor(
        @Inject(OAppConfig) private appConfig: IAppConfig,
        private router: Router
    ) {

    }
}
