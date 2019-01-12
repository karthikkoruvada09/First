import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RoutModule } from './/rout.module';
import { StudentComponent } from './student/student.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { RuleComponent } from './rule/rule.component';
import { Home1Component } from './home1/home1.component';
import { ContactComponent } from './contact/contact.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { AddadminComponent } from './addadmin/addadmin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import{HttpClientModule} from '@angular/common/http';
import { SearchPipe } from './search.pipe';
import { P1Pipe } from './p1.pipe';
import { P2Pipe } from './p2.pipe'

@NgModule({
  declarations: [
  
    AppComponent,
    HomeComponent,
    AboutComponent,
    StudentComponent,
    AdminComponent,
    LoginComponent,
    RuleComponent,
    Home1Component,
    ContactComponent,
    AddstudentComponent,
    AddemployeeComponent,
    AddcourseComponent,
    AddadminComponent,
    AdminhomeComponent,
    StudentdetailsComponent,
    EmployeedetailsComponent,
    CoursedetailsComponent,
    SearchPipe,
    P1Pipe,
    P2Pipe,
  
  ],
  imports: [
    BrowserModule,
    RoutModule,
    FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
