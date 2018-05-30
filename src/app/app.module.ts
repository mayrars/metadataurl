import { PublicGuard } from './common/guards/public.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {Ng2Webstorage} from 'ngx-webstorage';
import { MatButtonModule } from '@angular/material'

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AuthGuard } from './common/guards/auth.guard';
import { AuthService } from './common/auth.service';
import { HeaderComponent } from './common/header/header.component';


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
	AngularFirestoreModule,
	AngularFireAuthModule,
	Ng2Webstorage,
	MatButtonModule
  ],
  providers: [
	  AuthGuard,PublicGuard,//guard
	  AuthService//service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
