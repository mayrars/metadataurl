import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  afAuth = this.auth.afAuth
  constructor( public auth : AuthService, public router : Router ) { }
  ngOnInit() {

  }
  logout(){
	this.auth.logout()
    this.router.navigate([''])
  }
}
