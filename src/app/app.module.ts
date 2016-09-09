import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PersonalDetailComponent } from './pages/personal-detail/personal-detail.component';
import { LoginComponent } from './pages/login/login.component';
import {OAppConfig, APP_CONFIG, IAppConfig} from './config.service';

import { routing } from './app.routing';
import {DynamicFormComponent} from './dynamic-form-component/dynamic-form.component';

import {InputTextComponent} from './fieldComponents/input-text/input-text.component';
import {InputPasswordComponent} from './fieldComponents/input-password/input-password.component';

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
		LoginComponent,
		DynamicFormComponent,
		InputTextComponent,
		InputPasswordComponent,
		PersonalDetailComponent
	],
	providers: [
		{ provide: OAppConfig, useValue: APP_CONFIG },
	],
	bootstrap: [AppComponent]
})
export class AppModule { }