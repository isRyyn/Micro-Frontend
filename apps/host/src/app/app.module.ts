import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '@micro-frontend/shared-ui';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent
],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(appRoutes),
    RouterOutlet,
    CommonModule,
    ReactiveFormsModule,
    ButtonComponent
],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
