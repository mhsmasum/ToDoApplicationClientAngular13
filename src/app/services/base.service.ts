import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BaseService {

  apiUrl = environment.API_URL;

  reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',

  });
  constructor(public http: HttpClient) { }


  getAll(){
    return this.http.get(this.apiUrl);
  }
  getById(id: string) {
    return this.http.get(this.apiUrl + id);
  }

  post(data:any) {
    const body=JSON.stringify(data);
    return this.http.post(this.apiUrl, body,{ headers: this.reqHeader });
  }
  put(data:any) {
    const body=JSON.stringify(data);
    return this.http.put(this.apiUrl, body,{ headers: this.reqHeader });
  }
  delete(id:any){
    return this.http.delete(this.apiUrl+"/"+id,{ headers: this.reqHeader });
  }
}
