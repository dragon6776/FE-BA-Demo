import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/_services/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  message: string;
  statusClass: string;
  enumStatusClass = {
    success: 'success',
    error: 'danger'
  };

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.alertService.alertSubject.subscribe((data) => {
      this.message = data.message;
      this.statusClass = this.enumStatusClass[data.status];
    });
  }

}
