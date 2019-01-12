import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(private router: Router,private ds:ServService) { }

  data = {};
  username;
  password;
  onsubmit(data) {
    console.log(data);
    this.ds.sendData4(data).subscribe(data => {
      console.log(data);
      if(data){
        this.router.navigate(['/home1']);
      }
    })
  }

}
