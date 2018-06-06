import { NotFoundComponent } from './common/not-found/not-found.component';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './common/guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicGuard } from './common/guards/public.guard';

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: '/login' },
	{
		path: 'login',
		loadChildren: './public/login/login.module#LoginModule',
		pathMatch: 'full',
		canActivate: [PublicGuard]
	},
	{
		path: 'home',
		loadChildren: './auth/home/home.module#HomeModule',
		pathMatch: 'full',
		canActivate: [AuthGuard]
	},
	{
		path: '**', component: NotFoundComponent
	}
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forRoot(routes)
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
