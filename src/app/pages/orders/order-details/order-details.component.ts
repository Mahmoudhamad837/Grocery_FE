import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PagesService } from '../../pages.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  id: any;
  order: any = {};
  constructor(
    private pagesService: PagesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      res=>{
        this.id = res['id'];
        this.getOrderDetails(this.id);
      }
    );
  }

  getOrderDetails(id: any){
    this.pagesService.getOrderDetails(id).subscribe(
      (res: any)=>{
        this.order = res;
      },
      error=>{

      }
    );
  }

  gotoOrders(){
    this.router.navigate(['pages/profile']);
  }

}
