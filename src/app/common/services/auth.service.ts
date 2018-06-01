import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth"
import { environment } from '../../../environments/environment'
import { SessionStorageService } from 'ngx-webstorage'
@Injectable({
	providedIn: 'root'
})
export class AuthService {
	hasSession = false;
	user;
	constructor(public afAuth: AngularFireAuth, public logged: SessionStorageService) { }
	login(email, password) {
		return this.afAuth.auth.signInWithEmailAndPassword(email, password)
	}
	logout() {
		this.user = null;
		this.hasSession = false;
		this.logged.clear('user');
		this.afAuth.auth.signOut();
	}
	isLogged() {
		const user = this.logged.retrieve('user')
		if (!!user) {
			this.user = user
			this.hasSession = true
		}
		return this.hasSession
	}
}
