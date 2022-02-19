import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orders: any[] = [];
  constructor(
    private pagesService: PagesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getUserOrders();
  }

  getUserOrders(){
    this.pagesService.getUserOrders().subscribe(
      (res: any)=>{
        console.log(res);
        this.orders = res['orders'];
      },
      error=>{
        console.log(error);
      }
    );
  }
  gotoDetails(id: any){
    this.router.navigate(['pages/orders/order-details', id]);
  }

}
