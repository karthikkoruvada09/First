import { Component, OnInit } from '@angular/core';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.css']
})
export class CoursedetailsComponent implements OnInit {
  arr: any = {};
  ab: any = {};
  b: boolean=false;
  data:object[]=[];
  course;
  branch;
  affiliatedto;
  feedetails;
  constructor(private dv: ServService) { }

  ngOnInit() {

    this.dv.getData2().subscribe(a => this.arr = a);
  }
  
  edit(y) {
    this.ab = y;
    console.log(this.ab);
    this.b = true;
  }
  update() {
    this.dv.update(this.ab).subscribe(b => this.arr = b)
    this.b = false;
  }
delete(q)
{
 
  console.log(q);
  this.dv.removeData(q).subscribe(data=>this.arr=data)
}



}


