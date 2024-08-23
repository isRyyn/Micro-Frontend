import { Component } from '@angular/core';
import { SharedService, User } from '@micro-frontend/shared-utils';

@Component({
  selector: 'app-user-entry',
  templateUrl: './entry.component.html',
styleUrls: ['./entry.component.scss']
})
export class RemoteEntryComponent {
    user!: User;

    constructor(private sharedService: SharedService) {}

    ngOnInit(): void {
        this.sharedService.getUserById(1).subscribe((r:any) => this.user = r['data'] as User);
    }
}
