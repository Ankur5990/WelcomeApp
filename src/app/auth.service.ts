import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';


@Injectable()
export class AuthService {
    token: string;
    constructor(private router: Router){

    }
    onLogin(userName: string, pass: string){
        firebase.auth().signInWithEmailAndPassword(userName, pass)
            .then((response) => {
                this.router.navigate(['/home']);
                this.saveToken();
            })
    }
    onLogout(){
        firebase.auth().signOut();
        this.token = null;
        this.router.navigate(['/']);
    }
    isAuthenticate(){
        return this.token != null;
    }
    private saveToken(){
        firebase.auth().currentUser.getIdToken()
            .then((token: string) => {
                this.token = token;
            }) 
    }
}