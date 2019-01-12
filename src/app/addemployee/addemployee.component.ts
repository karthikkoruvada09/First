import { Component, OnInit } from '@angular/core';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
  data = {};
  name;
  phoneno;
  subjectname;
  salary;
  gender;
  emailid;
  state;
  address;
  constructor(private ds: ServService) { }

  ngOnInit() {
  }
  onSubmit(data) {
    
    console.log(data);
    this.ds.saveData1(data).subscribe(data => this.data = data)
  }
}
