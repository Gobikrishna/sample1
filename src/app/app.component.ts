import { Component, Inject, OnInit } from '@angular/core';

import { Http } from '@angular/http';
import {OAppConfig, APP_CONFIG, IAppConfig} from './config.service';

@Component({
	selector: 'my-app',
	templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

	constructor(private http: Http,
		@Inject(OAppConfig) private appConfig: IAppConfig
	) {

	}

	ngOnInit() {
		this.appConfig.settings = {
			header: {
				"background-color": "blue"
			},
			footer: {
				"background-color": "yellow"
			}
		}
	}
}