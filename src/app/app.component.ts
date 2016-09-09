import { Component, Inject, OnInit } from '@angular/core';

import { Http } from '@angular/http';
import {OAppConfig, APP_CONFIG, IAppConfig} from './config.service';

import {FieldType} from './config.service';

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

		this.http.get("http://localhost:9000/js/service.json").map(res => {
			let body = res.json();
			return body || [];
		}).subscribe(result => {
			this.appConfig.settings = result;
		});

		//  = {
		// 	header: {
		// 		backgroundColor: "blue"
		// 	},
		// 	footer: {
		// 		backgroundColor: "yellow"
		// 	},
		// 	fields: {
		// 		personalDetails: {
		// 			heading: "Personal Details",
		// 			formFields: [
		// 				{
		// 					label: "Name",
		// 					placeholder: "Please enter your name",
		// 					value: '',
		// 					type: FieldType.Text
		// 				},
		// 				{
		// 					label: "Password",
		// 					placeholder: "",
		// 					value: '',
		// 					type: FieldType.Password
		// 				},
		// 				{
		// 					label: "Password",
		// 					placeholder: "",
		// 					value: '',
		// 					type: FieldType.Password
		// 				},
		// 			]
		// 		},
		// 		step2: {
		// 			heading: "Step2 Details",
		// 			formFields: [
		// 				{
		// 					label: "Name",
		// 					placeholder: "Please enter your name",
		// 					value: '',
		// 					type: FieldType.Text
		// 				},
		// 				{
		// 					label: "Password",
		// 					placeholder: "",
		// 					value: '',
		// 					type: FieldType.Password
		// 				},
		// 				{
		// 					label: "Password",
		// 					placeholder: "",
		// 					value: '',
		// 					type: FieldType.Password
		// 				},
		// 			]
		// 		}
		// 	}
		// };



	}
}