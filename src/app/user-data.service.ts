// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserDataService {
// apiUrl = "http://localhost:3000/api/user";
//   constructor(public httpclint:HttpClient) {}

// getuser(){
//   return this.httpclint.get(this.apiUrl);
// }
// saveUser(data:any){
//   console.log(data);
//   return this.httpclint.post(this.apiUrl,data);
// }
  
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';



let headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': 'http://localhost:4200',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST',
  'Authorization': 'Bearer szdp79a2kz4wh4frjzuqu4sz6qeth8m3',
});
@Injectable({
  providedIn: 'root'
})

export class UserDataService {
  
apiUrl = "http://localhost:3000/api/user";
loginUrl = "http://localhost:3000/api/login";
  constructor(public httpclint:HttpClient) {}


  
getuser(){
  return this.httpclint.get(this.apiUrl);
}
saveUser(data:any){
  console.log(data);
  return this.httpclint.post(this.apiUrl,data);
}

getlogin(){
  return this.httpclint.get(this.loginUrl);
}
save_login(data:any){
  console.log(data);
  return this.httpclint.post(this.loginUrl,data);
}}

