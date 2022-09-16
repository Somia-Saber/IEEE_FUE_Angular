import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import{UserDataService} from '../user-data.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']

  
})

export class SignupComponent implements OnInit {

  constructor(private user:UserDataService,private http:HttpClient , private router:Router) {}
    signup = new FormGroup({
      firstname : new FormControl('',Validators.required),
    secondname: new FormControl('',Validators.required),
    ieee_id: new FormControl(''),
   
  phone_no: new FormControl('',Validators.required),
   uni_id: new FormControl(''),
   faculty: new FormControl(''),
  major: new FormControl(''),
    level: new FormControl(''),
    email: new FormControl('',Validators.required),
  gender: new FormControl(''),
    birthday_date: new FormControl(''),
    city: new FormControl(''),
    password: new FormControl('',Validators.required),
    username: new FormControl('',Validators.required),
    //imgg: new FormControl('')

});

  ngOnInit(): void {
  }
  saveData(){
    // console.log(this.signup.value);
    // this.user.saveUser(this.signup.value).subscribe((result)=>{
      // console.log(result);
      //if condition if success
    // });
    this.http.post<any>("http://localhost:3000/api/user",this.signup.value).subscribe(res=>{
alert("Signup successfull");
this.signup.reset();
this.router.navigate(['login']);
},err=>{
alert("Something Went Wrong")
})


  }
  
}