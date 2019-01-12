import { Component, OnInit } from '@angular/core';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {

  data = {};
  course;
  branch;
  affiliatedto;
  feedetails;
  constructor(private dc: ServService) { }

  ngOnInit() {
  }
  onSubmit(data) {
    
    console.log(data);
    this.dc.saveData2(data).subscribe(data => this.data = data)
  }
}
