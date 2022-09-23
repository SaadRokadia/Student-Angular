
import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})


export class AppComponent {
	title = 'Student Management By Saad Rokadia';

	// Add few students for initial listing
	studentsList = [
	{	
		id : 1,
		first_name : "Saad",
		last_name : "Rokadia",
		email : "saadrokadia@gmail.com",
		phone : 8433631416,
	},
	{
		id : 2,
		first_name : "Biz",
		last_name : "Technologies",
		email : "Biz@yahoo.com",
		phone : 9876543210,
		
	},
	{
		id : 3,
		first_name : "ABCD",
		last_name : "XYZ",
		email : "ABCD@gmail.com",
		phone :9876541230,
	}
	];

	constructor() {
		// Save students to localStorage
		localStorage.setItem('students', JSON.stringify(this.studentsList));
	}
}