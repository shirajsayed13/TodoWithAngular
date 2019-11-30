import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'Shiraj'
  password = 'Shiraj@13'
  errorMessage = 'Invalid Credentails'
  invalid = false

  constructor(private route: Router) { }

  ngOnInit() {
  }

  handleLogin() {
    console.log(this.username)
    if(this.username === 'shiraj' && this.password === 'Shiraj@13') {
      this.route.navigate(['welcome'])
      this.invalid = false
    } else {
      this.invalid = true
    }
  }

}
