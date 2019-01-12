import { Component, OnInit } from '@angular/core';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {

  arr:any={};
  b:boolean=false;
abd:any={};
name;
  phoneno;
  subjectname;
  salary;
  gender;
  emailid;
  state;
  address;
  constructor(private dv:ServService) { }

  ngOnInit() {
    
    this.dv.getData1().subscribe(a=>this.arr=a);
  }
  d:object;
  delete(y)
  {
    this.dv.removeData2(y).subscribe(data=>this.arr=data)
  }
  edit(s)
{
  this.abd=s;
  this.b=true;
}
update()
{
  this.dv.update2(this.abd).subscribe(data=>this.arr=data);
  this.b=false;
}



}
