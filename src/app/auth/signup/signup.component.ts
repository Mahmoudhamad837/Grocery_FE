import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  showPass:boolean=false;
  confirmPassword:boolean=false;

  signupForm: FormGroup;
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.signupForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      checkPassword: new FormControl('', [Validators.required]),
    });
  }

  signup(){
    console.log(this.signupForm.value);
    this.authService.signup(this.signupForm.value).subscribe(
      (res: any)=>{
        console.log(res);
        this.router.navigate(['/auth/verify'], {queryParams: {email: this.signupForm.value.email}});
      },
      error=>{
        console.log(error);
      }
    );
  }
  showPassword(){

  }

}
