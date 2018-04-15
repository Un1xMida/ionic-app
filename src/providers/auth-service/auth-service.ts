import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
let apiUrl = 'http://localhost:3000/'
/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()

export class AuthServiceProvider {
  loggedIn:boolean=false;
  res:any[];
  constructor(public http: HttpClient) {
    
  }
  getData(type:string,username,password){
    return new Promise ((resolve,reject) => {
      this.http.get(apiUrl+type).subscribe(res => {
        resolve(res);
        for (let i = 0; i < (<any>res).length; i++) {
          if(res[i].username === username && res[i].password === password){
            this.loggedIn=true;
            break;
          }else {
            this.loggedIn=false;
          }
        }
        
      }),
      (err) => {
        reject(err)
      }
    })
  }
  postData(credentials , type){
    return new Promise ((resolve,reject) => {
      let headers = new HttpHeaders();
      this.http.post(apiUrl+type,credentials,{headers:headers}).subscribe(res => {
        resolve(res);
      }),(err) => {
        reject(err)
      }
    })
  }

  //POST CALLS
  
  getPost(type:string,){
    return new Promise ((resolve,reject) => {
      this.http.get(apiUrl+type).subscribe(res => {
        resolve(res)
      }),
      (err) => {
        reject(err)
      }
    })
  }

  createPost(data,type){
    return new Promise ((resolve,reject) => {
      let headers = new HttpHeaders();
      this.http.post(apiUrl+type,data,{headers:headers}).subscribe(res => {
        resolve(res);
      }),(err) => {
        reject(err)
      }
    })

  }
  getPostData(type,id){
    return new Promise ((resolve,reject) => {
      this.http.get(apiUrl+type+'/'+id).subscribe(res => {
        resolve(res)
      }),
      (err) => {
        reject(err)
      }
    })
  }
}

