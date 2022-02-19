import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent implements OnInit {

  verifyForm: FormGroup;
  email: any;
  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.route.queryParams.subscribe(
      res=>{
        this.email = res['email'];
      }
    );
  }

  initForm(){
    this.verifyForm = new FormGroup({
      code: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  verify(){
    this.verifyForm.patchValue({email: this.email});
    console.log(this.verifyForm.value);
    this.authService.verify(this.verifyForm.value).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/auth/login']);
      },
      error=>{
        console.log(error);
      }
    );
  }

}
