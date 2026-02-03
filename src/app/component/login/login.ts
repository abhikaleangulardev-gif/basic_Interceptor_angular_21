import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit{
  constructor(private http:HttpClient){}
  myApiUrls:string = 'https://jsonplaceholder.typicode.com/posts';


  ngOnInit(): void {
    // this.getPostList();
  }

  getPostList(){
    return this.http.get(this.myApiUrls).subscribe((resp:any)=> {
      console.log(resp);
      console.log(resp.token);
    });
  }

}
