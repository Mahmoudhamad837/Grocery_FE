import { Component, OnInit } from '@angular/core';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  notifications: any[] = [];
  constructor(
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.notificationService.listen('notifications').subscribe(data=>{
      console.log('Data From Socket:- ',data);
    });
    this.getNotifications();
  }

  getNotifications(){
    this.notificationService.getNotifications().subscribe(
      (res:any)=>{
        this.notifications = res['notifications'];
      }
    );
  }

}
