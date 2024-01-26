import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})

export class UserSerializerService {
  toJson(user: User): any {
    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
    };
  }
  
  fromJson(json: any): User {
    return new User(json.id, json.firstName, json.lastName);
  }
}