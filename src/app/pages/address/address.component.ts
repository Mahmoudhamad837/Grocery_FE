import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  addresses: any[] = [];
  constructor(
    private pagesService: PagesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAddresses();
  }

  getAddresses(){
    this.pagesService.getUserAddresses().subscribe(
      (res: any)=>{
        this.addresses = res['address'];
      },
      error=>{
        console.log(error);
      }
    );
  }

  addAddress(){
    console.log('Address Added');
    this.router.navigate(['pages/address/add'])
  }

  editAddress(id: any){
    console.log('Address Editted');
    this.router.navigate(['pages/address/edit/', id]);
  }

  deleteAddress(){
    console.log('Address Deleted');
  }

  setAsDefault(data:any, id: any){
    data.isDefault = true;
    delete data._id;
    delete data.__v;
    this.pagesService.updateAddress(data, id).subscribe(
      res=>{
        this.getAddresses();
      },
      error=>{
        console.log(error);
      }
    );
  }
}
