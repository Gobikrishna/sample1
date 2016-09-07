import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import {OAppConfig, APP_CONFIG, IAppConfig} from './config.service';


import { routing } from './app.routing';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		JsonpModule,
		routing
	],
	declarations: [
		AppComponent,
		HomeComponent,
		LoginComponent
	],
	providers: [
		{ provide: OAppConfig, useValue: APP_CONFIG },
	],
	bootstrap: [AppComponent]
})
export class AppModule { }