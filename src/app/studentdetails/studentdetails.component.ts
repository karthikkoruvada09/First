import { Component, OnInit } from '@angular/core';
import { ServService } from '../serv.service';
import { $ } from 'protractor';


@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {
  arr={};
   abc:any={};
   b:boolean=false;
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
  constructor(private dd: ServService) { }

  ngOnInit() {
    this.dd.getData().subscribe(a => this.arr = a);
  
    }
  

  
  g: object;
  delete(x) {
    this.dd.removeData1(x).subscribe(data=>this.arr=data);
  }
edit(s)
{
  this.abc=s;
  this.b=true;
}
update()
{
  this.dd.update1(this.abc).subscribe(data=>this.arr=data);
  this.b=false;
}

}
