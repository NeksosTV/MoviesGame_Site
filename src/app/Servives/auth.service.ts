import { Injectable } from '@angular/core';
import { Utilisateur } from 'src/app/Models/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }
  public seConnecter(userInfo: Utilisateur){
    localStorage.setItem('ACCESS_TOKEN', "access_token");
  }
  public estConnecte(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;

  }
  public seDeconnecter(){
    localStorage.removeItem('ACCESS_TOKEN');
  }
}