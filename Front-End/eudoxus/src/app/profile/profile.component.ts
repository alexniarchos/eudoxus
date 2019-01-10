import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentsService } from '../students/students.service';
import { Router, ActivatedRoute} from '@angular/router';
import { SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @ViewChild('f') registrationForm: NgForm;

  constructor(private sessionSt:SessionStorageService,private studentSer:StudentsService, private router:Router,private route: ActivatedRoute) { }
  change=0;
  user: any;
  ngOnInit() {
    
  }


  onSubmitdetails(){
    if(this.registrationForm.value.password1!=this.registrationForm.value.password2){
      window.alert("Ξαναγράψτε τον κωδικό");
      return;
    }
    if(this.registrationForm.value.name=='')
      this.registrationForm.value.name=this.user.name;
    if(this.registrationForm.value.surname=='')
      this.registrationForm.value.surname=this.user.surname;
    if(this.registrationForm.value.email=='')
      this.registrationForm.value.email=this.user.email;
    if(this.registrationForm.value.password1=='')
      this.registrationForm.value.password1=this.user.password;
    if(this.registrationForm.value.tel=='')
      this.registrationForm.value.tel=this.user.phone;
    this.studentSer.update_foithths(this.registrationForm.value.name,this.registrationForm.value.surname,this.user.email,this.registrationForm.value.email,this.registrationForm.value.password1,this.registrationForm.value.tel,).subscribe(
      (res:any)=>{
        if(res){
          this.change=0;
          this.sessionSt.store('email',this.registrationForm.value.email);
          this.sessionSt.store('password',this.registrationForm.value.password);
          this.router.navigateByUrl('/home', {skipLocationChange: true}).then(()=>this.router.navigate(["students/details"])); 
        }
        else
          window.alert("User with same email already exists!");
      });
  }
}