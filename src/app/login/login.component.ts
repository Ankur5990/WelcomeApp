import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authServ: AuthService) { }

  ngOnInit() {
  }
  onSubmit(forms: NgForm){
    const userName = forms.value.email;
    const pass = forms.value.password;
    this.authServ.onLogin(userName, pass);
  }
}
