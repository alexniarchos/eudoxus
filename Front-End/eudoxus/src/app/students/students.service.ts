import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as h from '../host';
import { SessionStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http:HttpClient, private sessionSt:SessionStorageService) { }

  getdetails(){
    var email=this.sessionSt.retrieve('email');
    var password=this.sessionSt.retrieve('password');
    const httpOptions={
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa(email+':'+password)
      }),
    };
    return this.http.get<any>(h.host+'/get_foithths_details',httpOptions); 
  }
  getuniversity(){
    var email=this.sessionSt.retrieve('email');
    var password=this.sessionSt.retrieve('password');
    const httpOptions={
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa(email+':'+password)
      }),
    };
    return this.http.get<any>(h.host+'/get_university_details',httpOptions); 
  }
  getdepartment(){
    var email=this.sessionSt.retrieve('email');
    var password=this.sessionSt.retrieve('password');
    const httpOptions={
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa(email+':'+password)
      }),
    };
    return this.http.get<any>(h.host+'/get_department_details',httpOptions); 
  }

  update_foithths(name,surname,email,newemail,password,tel){
    const httpOptions={
      headers: new HttpHeaders({
        // 'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa(email+':'+password)
      }),
    };
    return this.http.put<Boolean>(h.host+'/update_foithths',name+':'+surname+':'+tel+':'+newemail,httpOptions); 
  }
}
