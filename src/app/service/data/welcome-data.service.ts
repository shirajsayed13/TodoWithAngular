import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export class HelloWorldBean {
  constructor(public message: String) {

  }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }
 
  executeHelloWorldBeanService() {
    //console.log('Hello World Bean Service')
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
  }
  
  executeHelloWorldWithPathVariable(name) {
    return this.http.get(`http://localhost:8080/hello-world/path/${name}`)
  }
}
