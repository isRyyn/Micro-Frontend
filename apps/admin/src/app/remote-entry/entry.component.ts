import { Component } from '@angular/core';
import { SharedService, User } from '@micro-frontend/shared-utils';

@Component({
    selector: 'app-admin-entry',
    templateUrl: './entry.component.html',
    styleUrls: ['./entry.component.scss']
})
export class RemoteEntryComponent {
    user: User = {
        id: 1,
        name: 'Admin',
        email: 'abc@mail.com',
        role: 'admin'
    };
    usersList: Array<any> = [];
    name!: string;
    showInput = false;

    constructor(private sharedService: SharedService) {}

    ngOnInit(): void {
        this.sharedService.getUsers().subscribe(r => {
            r = r.data;
            r.sort((a: { id: number; }, b: { id: number; }) => b.id - a.id);
            this.usersList = r;
        });
    }

    addUser(): void {
        this.showInput = true;
        
    }

    save(): void {
        this.sharedService.addUser({ name : this.name }).subscribe(() => {
            this.showInput = false;
        });
    }

    delete(id: number): void {
        this.sharedService.deleteUser(id).subscribe();
    }
}
