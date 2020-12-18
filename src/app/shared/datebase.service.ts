import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {
  MyWorker
} from 'src/app/shared/worker.model';
@Injectable({
  providedIn: 'root'
})
export class DatebaseService {
  
  constructor(private http: HttpClient){ }
      
  getData(){
      return this.http.get('http://localhost:3000/workers')
  }
  postData(worker){
    const headers = { 'content-type': 'application/json'} 
    const body=JSON.stringify(worker);
    return this.http.post('http://localhost:3000/workers',body,{'headers':headers})

   
  }
  putData(worker){
    const headers = { 'content-type': 'application/json'} 
    const body=JSON.stringify(worker);
    return this.http.put(`http://localhost:3000/workers/${worker.id}`,body,{'headers':headers})

   
  }
  deleteData(id) {
    return this.http.delete(`http://localhost:3000/workers/${id}`, { responseType: 'text' });
  }
}

 