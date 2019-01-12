import { Component, OnInit } from '@angular/core';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {
  data = {};
  enrollmentid;
  firstname;
  lastname;
  country;
  gender;
  emailid;
  state;
  address;
  password;
  springsemister;
  fallsemister;
  summersemister;
  constructor(private ds: ServService) { }

  ngOnInit() {
  }
  onSubmit(data) {
    console.log(data);
    this.ds.saveData(data).subscribe(data => this.data = data)
  }
}
