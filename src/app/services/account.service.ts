import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService extends BaseService{

  apiUrl = environment.API_URL+"/account";
  reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',

  });
  Register(data:any){
    const body=JSON.stringify(data);
    return this.http.post(this.apiUrl+"/Register", body,{ headers: this.reqHeader });
  }

  SignIn(data:any){
    const body=JSON.stringify(data);
    return this.http.post(this.apiUrl+"/Signin", body,{ headers: this.reqHeader });
  }

}
