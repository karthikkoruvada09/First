import { Component, OnInit } from '@angular/core';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-addadmin',
  templateUrl: './addadmin.component.html',
  styleUrls: ['./addadmin.component.css']
})
export class AddadminComponent implements OnInit {
  data = {};
  name;
  id;
  emailid;
  userid;
  password;
  constructor(private da: ServService) { }

  ngOnInit() {
  }
  onSubmit(data) {
    
    console.log(data);
    this.da.saveData3(data).subscribe(data => this.data = data)
  }
}
