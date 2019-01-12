import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { StudentComponent } from './student/student.component';
import { RuleComponent } from './rule/rule.component';
import { Home1Component } from './home1/home1.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { AddadminComponent } from './addadmin/addadmin.component';
import { ContactComponent } from './contact/contact.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';


@NgModule({
  imports: [  
    RouterModule.forRoot([{path:"home",component:HomeComponent},
    {path:"about",component:AboutComponent},
    {path:"login",component:LoginComponent,
    children:[{path:"admin",component:AdminComponent},
    {path:"student",component:StudentComponent}
  ]},
  {path:"home1",component:Home1Component,
  children:[{path:'',component:AdminhomeComponent},
    {path:"addstudent",component:AddstudentComponent},
  { path:"addemployee",component:AddemployeeComponent},
  { path:"addcourses",component:AddcourseComponent},
  {path:"employeedetails",component:EmployeedetailsComponent},
  { path:"addadmin",component:AddadminComponent},
  {path:"adminhome",component:AdminhomeComponent},
  {path:"contact",component:ContactComponent},
  {path:"",component:HomeComponent},
  

{path:"coursedetails",component:CoursedetailsComponent},
{path:"studentdetails",component:StudentdetailsComponent}
]},







  {path:'',component:HomeComponent}
  ])
  ],
  exports:[RouterModule]
})
export class RoutModule { }
