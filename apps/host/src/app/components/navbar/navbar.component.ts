import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
    scrolled: boolean = false;

  constructor(
    private router: Router
  ){}

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.scrolled = offset > 50;
  }

  goToPath(path: string): void {
    this.router.navigate([`/${path}`]);
  }

  get showLogout(): boolean {
    return this.router.url != '/';
  }
}
