import { AuthService } from './../../common/services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class PublicGuard implements CanActivate {
	constructor(public router: Router, public auth: AuthService) { }
	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
			if(!this.auth.isLogged()){
				return true;
			}
			console.log('In Line');
			this.router.navigate(['/home']);
			return false;
		}
}
