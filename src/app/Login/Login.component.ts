import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {

    Nombre: string;
    Password: string;
    hide = true;
  constructor() { }
 
    login() {
    console.log(this.Nombre);
    console.log(this.Password);

    }
  ngOnInit() {
  }

}
