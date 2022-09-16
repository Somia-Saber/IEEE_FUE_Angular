import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

import{UserDataService} from '../user-data.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userlogin:UserDataService,private http:HttpClient , private router:Router){}
    login = new FormGroup({
      username : new FormControl(''),
      password : new FormControl('')
});
   

  ngOnInit(): void {
  }
  savelogin(){

    this.userlogin. save_login(this.login.value).subscribe((result)=>{
      console.log(result);
    });
    this.http.get<any>("http://localhost:3000/api/user").subscribe(res=>{
const user = res.find((a:any)=>{
return a.username === this.login.value.username && a.password === this.login.value.password
});
if(user){
alert("login success");
this.login.reset();
this.router.navigate(['home']);
}else{
alert("User Not Found");
}

})

  }

}