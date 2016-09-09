import { Component, Inject, OnInit, AfterViewInit, trigger, transition, animate, style, state } from '@angular/core';
import {  Router } from '@angular/router';
import {OAppConfig, APP_CONFIG, IAppConfig} from '../../config.service';

@Component({
    selector: 'personal-detail',
    templateUrl: './template/personal-detail.template.html'
})
export class PersonalDetailComponent {

    constructor(
        @Inject(OAppConfig) private appConfig: IAppConfig,
        private router: Router
    ) {

    }

    formValue($event: any) {
        console.log($event);
    }
}
