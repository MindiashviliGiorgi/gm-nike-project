import { Component } from '@angular/core';
import { UserSerializerService } from 'src/app/initializers/user/user-initializer.service';
import { User } from 'src/app/initializers/user/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  jsonRepresentation: any;
  deserializedUser: User | undefined;

  constructor(private userSerializerService: UserSerializerService) {
    const user = new User(1, 'Giorgi', 'Mindiashvili');

    this.jsonRepresentation = this.userSerializerService.toJson(user);
    
    this.deserializedUser = this.userSerializerService.fromJson(this.jsonRepresentation);
  }

  ngOnInit(): void {}


}
