import { WelcomeDataService } from './../service/data/welcome-data.service'
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = ''
  welcomeMessageFromService:String
  errorMessageFromService:String
  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: WelcomeDataService) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name']
  }

  navigateTodo() {
    this.router.navigate(['listtodos'])
  }


  getWelcomeMessageWithPathVariable() {
    this.service.executeHelloWorldWithPathVariable('Shiraj Sayed').subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    )
  }

  getWelcomeMessage() {
    this.service.executeHelloWorldBeanService().subscribe(
        response => this.handleSuccessfulResponse(response),
        error => this.handleErrorResponse(error)
    );
  }

  handleSuccessfulResponse(response) {
    console.log(response);
    this.welcomeMessageFromService = response.message
  }

  handleErrorResponse(error) {
    console.log(error)
    this.errorMessageFromService = error.error.message
  }

}
