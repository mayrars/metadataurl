import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Ng2Webstorage } from 'ngx-webstorage';
import { MatButtonModule } from '@angular/material'

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { HeaderComponent } from './common/header/header.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AuthService } from './common/services/auth.service';
import { DataService } from './common/services/data.service';

import { AuthGuard } from './common/guards/auth.guard';
import { PublicGuard } from './common/guards/public.guard';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireAuthModule,
		Ng2Webstorage,
		MatButtonModule,
		HttpClientModule,
		AngularFireDatabaseModule
	],
	providers: [
		AuthGuard, PublicGuard,//guard
		AuthService, DataService//service
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
