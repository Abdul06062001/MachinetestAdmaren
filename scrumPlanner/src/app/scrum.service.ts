import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrumService {

  constructor(private http:HttpClient) { }


  postStories(data:any){

   return this.http.post("http://localhost:3000/Stories",data)
  }

  getStories(){
    return this.http.get("http://localhost:3000/Stories")
  }


  getSprint(data:any){
    return this.http.get("http://localhost:3000/Stories",data)
  }


  dltStories(id:any){
   return this.http.delete("http://localhost:3000/Stories"+id) 
  }

}
