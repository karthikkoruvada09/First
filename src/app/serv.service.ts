import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServService {

  constructor(private http: HttpClient) { }


  sendData4(data): Observable<any> {
    console.log('data is receiving');
    return this.http.post('/login/admin',data);
  }

  getData(): Observable<any> {
    console.log('data is receiving');
    return this.http.get('/home1/studentdetails');
  }

  getData1(): Observable<any> {
    return this.http.get('/home1/employeedetails');
  }
  getData2(): Observable<any> {
    return this.http.get('/home1/coursedetails');
  }
  saveData(data): Observable<any> {
    console.log(data);
    return this.http.post('/home1/addstudent', data);

  }
  saveData1(data): Observable<any> {
    console.log(data);
    return this.http.post('/home1/addemployee', data);

  }
  saveData2(data): Observable<any> {
    console.log(data);
    return this.http.post('/home1/addcourses', data);

  }
  saveData3(data): Observable<any> {
    console.log(data);
    return this.http.post('/home1/addadmin', data);

  }
  removeData(id):Observable<any>
  {

return this.http.delete<any>('/home1/coursedetails/'+id)
  }
  update(id):Observable<any>
  {
    console.log(id);
    return this.http.put<any>('/home1/coursedetails',id);
  }
  update1(id):Observable<any>
  {
    return this.http.put('/home1/studentdetails',id)
  }
  removeData1(id):Observable<any>
  {

return this.http.delete<any>('/home1/studentdetails/'+id)
  }
  update2(id):Observable<any>
  {
    return this.http.put('/home1/employeedetails',id)
  }
  removeData2(id):Observable<any>
  {

return this.http.delete<any>('/home1/employeedetails/'+id)
  }
  
}
