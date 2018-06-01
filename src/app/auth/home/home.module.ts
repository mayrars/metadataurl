import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { InformationComponent } from './information/information.component';
import { MatTableModule, MatPaginatorModule, MatButtonModule } from '@angular/material';

@NgModule({
	imports: [
		CommonModule,
		HomeRoutingModule,
		MatTableModule,
		MatPaginatorModule,
		MatButtonModule,
		HttpClientModule
	],
	declarations: [
		HomeComponent,
		InformationComponent
	]
})
export class HomeModule { }
