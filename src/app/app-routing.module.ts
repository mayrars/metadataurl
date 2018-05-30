import { AuthGuard } from './common/guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicGuard } from './common/guards/public.guard';

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: '/login' },
	{
		path: 'login',
		loadChildren: './public/login/login.module#LoginModule',
		canActivate: [PublicGuard]
	},
	{
		path: 'home',
		loadChildren: './auth/home/home.module#HomeModule',
		canActivate: [AuthGuard]
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
