import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

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

  constructor(private route: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin() {
    console.log(this.username)
    // if(this.username === 'shiraj' && this.password === 'Shiraj@13')
    if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      this.route.navigate(['welcome'])
      this.invalid = false
    } else {
      this.invalid = true
    }
  }

}
