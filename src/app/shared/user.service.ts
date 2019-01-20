import { Injectable } from '@angular/core';
import { BehaviorSubject } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public users: BehaviorSubject<string[]> = 
  new BehaviorSubject<string[]>([])
  
  
  constructor() { }

  addUser(newUser: string) {
    this.users.value.push(newUser);
    
  }
}
