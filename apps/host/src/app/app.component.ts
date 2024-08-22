import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'host';

  constructor(private router: Router) { }

  get isLoggedIn(): boolean {
    return this.router.url != '/login';
  }
}
