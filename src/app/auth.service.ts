import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedUserSubject = new Subject<string>();

  login(): void {
    this.loggedUserSubject.next("Rafael");
  }

  getLoggedUser(): Observable<string> {
    return this.loggedUserSubject.asObservable();
  }
}
