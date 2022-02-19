import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PagesService } from '../../pages.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  id: any;
  addressForm: FormGroup;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private pagesService: PagesService
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.route.params.subscribe(
      res=>{
        this.id = res['id'];
        if(this.id){
          this.getAddress(this.id);
        }else{

        }
      }
    );
  }

  initForm(){
    this.addressForm = new FormGroup({
      fullName: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      mobileNumber: new FormControl('', [Validators.required]),
      streetName: new FormControl('', [Validators.required]),
      buildingNo: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      district: new FormControl('', [Validators.required]),
      Governrate: new FormControl('', [Validators.required]),
      addressType: new FormControl('', [Validators.required]),
    });
  }

  getAddress(id: any){
    this.pagesService.getAddress(id).subscribe(
      (res: any)=>{
        this.addressForm.patchValue({
          fullName: res.address.fullName,
          country: res.address.country,
          mobileNumber: res.address.mobileNumber,
          streetName: res.address.streetName,
          buildingNo: res.address.buildingNo,
          city: res.address.city,
          district: res.address.district,
          Governrate: res.address.Governrate,
          addressType: res.address.addressType,
        });
      }
    );
  }

  addAddress(data: any){
    this.pagesService.addAddress(data).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['pages/profile']);
      },
      error=>{
        console.log(error);
      }
    );
  }

  updateAddress(data: any, id: any){
    this.pagesService.updateAddress(data, id).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['pages/profile']);
      },
      error=>{
        console.log(error);
      }
    );
  }

  onSubmit(){
    if(this.id){
      this.updateAddress(this.addressForm.value, this.id);
    }else{
      this.addAddress(this.addressForm.value);
    }
  }

}
