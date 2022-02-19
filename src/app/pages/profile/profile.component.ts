import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userForm: FormGroup;
  image:string = '';
  selectedFile: File;
  id: any;
  userData: any;
  constructor(
    private pagesService: PagesService
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.getProfileData();
  }

  getProfileData(){
    this.pagesService.getProfile().subscribe(
      (res: any)=>{
        console.log(res);
        this.userForm.patchValue({
          name: res['name'],
          email: res['email'],
          mobile: res['mobile'],
          gender: res['gender']
        });
        this.image = res['image'];
        this.id = res['_id'];
      }
    );
  }

  initForm(){
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      mobile: new FormControl('', [Validators.required]),
      gender: new FormControl(''),
      image: new FormControl('')
    });
  }

  onSubmit(){
    if(this.selectedFile){
      this.userForm.value.image = this.selectedFile;
    }else{
      delete this.userForm.value.image;
    }
    this.userData = this.userForm.value;
    let formData: FormData = new FormData();
    Object.keys(this.userData).forEach(ele=>{
      formData.append(ele, this.userData[ele]);
    });
    console.log(this.userForm.value);
    this.pagesService.updateProfile(formData, this.id).subscribe(
      (res: any)=>{
        console.log(res);
        this.getProfileData();
      },
      error=>{
        console.log(error);
      }
    );
  }

  onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
    
    if (this.selectedFile) {
      var reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(this.selectedFile);
    }    
  }

  _handleReaderLoaded(readerEvt: any) {
    var binaryString = readerEvt.target.result;
    this.image = 'data:image/png;base64,' + btoa(binaryString);
  }

}
