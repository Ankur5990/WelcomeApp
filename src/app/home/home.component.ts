import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  services: string[];
  constructor() { }

  ngOnInit() {
    this.services = [
      "Demo Service",
      "Welcome Service",
      "Login Service",
      "LogOut Service",
      "FireBase Authentication"
    ];
  }

}
