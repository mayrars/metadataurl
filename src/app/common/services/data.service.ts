import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { Observable } from "rxjs";

@Injectable({
	providedIn: 'root'
})
export class DataService {
	list_dramas: Observable<any[]>
	routdata:string = '';
	constructor(public db: AngularFireDatabase) {}
	getData():Observable<any[]> {
		this.list_dramas = this.db.list(`${this.routdata}/`).snapshotChanges().map(item => {
			return item.map(dato=>({
				key: dato.payload.key,
				link: dato.payload.val()
			}))
		})
		return this.list_dramas
	}
}
