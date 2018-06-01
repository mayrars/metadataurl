import { Observable } from 'rxjs';
import { AngularFireObject } from 'angularfire2/database';
import { DataService } from './../../../common/services/data.service';
import { AuthService } from './../../../common/services/auth.service';
import { Component, OnInit } from '@angular/core';
import "rxjs/add/operator/map";

@Component({
	selector: 'app-information',
	templateUrl: './information.component.html',
	styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
	items: any[]
	displayedColumns = ['title', 'description'];
	constructor(public data: DataService) {}

	ngOnInit() {
		this.data.getData().subscribe(data=>{
			this.items = data
		})
	}
	acceptUrl(event : Event, key){
		event.preventDefault()
		//Update status
		this.data.updateStatus(key);
	}
}
