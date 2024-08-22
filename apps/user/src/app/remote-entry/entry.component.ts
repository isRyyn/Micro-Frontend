import { Component } from '@angular/core';
import { User } from '@micro-frontend/shared-utils';

@Component({
  selector: 'app-user-entry',
  templateUrl: './entry.component.html',
styleUrls: ['./entry.component.scss']
})
export class RemoteEntryComponent {
    user: User = {
        id: 1,
        name: 'John',
        email: 'john@mail.com',
        role:  'user'
    };
}
