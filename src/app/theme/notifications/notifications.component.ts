import { Component, OnInit } from '@angular/core';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  notifications: any[] = [];
  isRead: boolean = false;

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

  markAsRead(id: any){
    this.isRead = true;
    this.notificationService.markAsRead(id).subscribe(
      res=>{
        this.getNotifications();
      },
      error=>{
        console.log(error);
      }
    );
  }

  markAllAsRead(){
    this.notificationService.markAllAsRead().subscribe(
      res=>{
        this.getNotifications();
      },
      error=>{
        console.log(error);
      }
    );
  }

  deleteNotification(id: any){
    this.notificationService.deleteNotification(id).subscribe(
      res=>{
        this.getNotifications();
      },
      error=>{
        console.log(error);
      }
    );
  }

  deleteAllNotifications(){
    this.notificationService.deleteAllNotifications().subscribe(
      res=>{
        this.getNotifications();
      },
      error=>{
        console.log(error);
      }
    );
  }

}
