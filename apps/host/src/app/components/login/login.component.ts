import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
    loginForm!: FormGroup;

    constructor(
        private router: Router
    ){}

    ngOnInit(): void {
        this.loginForm = new FormGroup({
            username: new FormControl(),
            password: new FormControl(),
            role: new FormControl('')
        });
    }

    onSubmit(): void {
        if(this.loginForm.value.role == 'user') {
            this.router.navigate(['/user']);
        } else if(this.loginForm.value.role == 'admin') {
            this.router.navigate(['/admin']);
        }
    }
}
