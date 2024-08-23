import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AdminHttpInterceptor } from './admin-http.interceptor';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { initialNavigation: 'enabledBlocking' }
    ),
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AdminHttpInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
