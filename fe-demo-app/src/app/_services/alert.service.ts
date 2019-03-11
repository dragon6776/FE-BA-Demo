import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  alertSubject = new Subject<any>();
  constructor() { }

  success(message: string): any {
    this.alertSubject.next({status: 'success', message: message});
  }

  error(message: string): any {
    this.alertSubject.next({status: 'error', message: message});
  }

}
