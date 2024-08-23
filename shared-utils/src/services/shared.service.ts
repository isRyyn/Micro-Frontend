import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

    private apiUrl = 'https://reqres.in/api/users';

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<any> {
    return this.httpClient.get(this.apiUrl);
  }

  getUserById(id: number) {
    return this.httpClient.get(`${this.apiUrl}/${id}`);
  }

  deleteUser(id: number) {
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }

  addUser(user: any) {
    return this.httpClient.post(this.apiUrl, user);
  }
}
