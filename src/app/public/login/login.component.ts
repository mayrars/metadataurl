import { SessionStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';
import { AuthService } from './../../common/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	user: User = <any>{}
	errorMessagef = ''
	constructor(
		public auth: AuthService,
		public router: Router,
		public logged: SessionStorageService
	) { }

	ngOnInit() {
	}

	onSubmit( event: Event ) {
		event.preventDefault();
		var errorCode, errorMessage, email = ''
		var user = {
			mail : this.user.mail,
			password: this.user.password
		}
		this.auth.login(user.mail, user.password)
			.then((data)=>{
				this.logged.store('user', data);
				this.router.navigate(['home'])
			}).catch((error)=>{
				console.log(error)
				errorCode = error.code
				errorMessage = error.message
				// The email of the user's account used.
				email = error.email
				// The firebase.auth.AuthCredential type that was used.
				errorMessage = error.credential
				this.auth.hasSession = false
				this.user.mail = ''
				this.user.password = ''
				this.errorMessagef = "Error :"+error.message
			})
	}
}
