import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    const config = {
      apiKey: "AIzaSyCU3147XPApjhPnuhRylcmTeqYQ47OMISw",
      authDomain: "blogproject-d8fd8.firebaseapp.com",
      databaseURL: "https://blogproject-d8fd8.firebaseio.com",
      projectId: "blogproject-d8fd8",
      storageBucket: "",
      messagingSenderId: "923253242456"
    };
    firebase.initializeApp(config);
  }


}
