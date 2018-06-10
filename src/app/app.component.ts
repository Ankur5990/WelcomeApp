import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'WelcomeApp';
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyCf_BY1ypp3eNOzHpgPMp8y8XDdcc_H3KA",
      authDomain: "recipeauth-302b3.firebaseapp.com",
    })
  }
}
