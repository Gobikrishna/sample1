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
import {InputEmailComponent} from './fieldComponents/input-email/input-email.component';
import {InputRadioComponent} from './fieldComponents/input-radio/input-radio.component';
import {InputCheckboxComponent} from './fieldComponents/input-checkbox/input-checkbox.component';
import {InputFileComponent} from './fieldComponents/input-file/input-file.component';
import {TextareaComponent} from './fieldComponents/textarea/textarea.component';

import {ButtonButtonComponent} from './fieldComponents/button-button/button-button.component';
import {ButtonResetComponent} from './fieldComponents/button-reset/button-reset.component';
import {ButtonSubmitComponent} from './fieldComponents/button-submit/button-submit.component';

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
		InputEmailComponent,
		InputRadioComponent,
		InputFileComponent,
		TextareaComponent,
		InputCheckboxComponent,
		ButtonButtonComponent,
		ButtonResetComponent,
		ButtonSubmitComponent,
		PersonalDetailComponent
	],
	providers: [
		{ provide: OAppConfig, useValue: APP_CONFIG },
	],
	bootstrap: [AppComponent]
})
export class AppModule { }