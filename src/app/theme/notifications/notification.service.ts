import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {io} from 'socket.io-client';
import { HttpClientService } from 'src/app/shared/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  socket: any;
  constructor(
    private http: HttpClientService
  ) { 
    this.socket = io('http://localhost:3000');
  }

  listen(eventName: string){
    return new Observable((subsciber)=>{
      this.socket.on(eventName, (data: any)=>{                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
        subsciber.next(data);
      })
    });
  }

  emit(eventName: string, data: any){
    this.socket.emit(eventName, data);
  }

  getNotifications(){
    return this.http.get('notifications', {});
  }
}                                                                                                                                                                                                                                                                                                                                                 
