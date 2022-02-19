import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  login(){
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe(
      (res: any)=>{
        console.log(res);
        localStorage.setItem('token', res['token']);
        this.authService.isLogged.next(true);
        this.router.navigate(['pages/home']);
      },
      error=>{
        if(error == 'Please Verify Your Email to Login'){
          this.router.navigate(['auth/verify'], {queryParams: {email: this.loginForm.value.email}});
        }
      }
    );
  }

}
