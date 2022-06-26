import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signInForm!: FormGroup  ;
  constructor(private accountService:AccountService, 
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.resetForm();
  }
  resetForm(){
    this.signInForm = new FormGroup({
    
      email: new FormControl("", [
        Validators.maxLength(500),
        
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250),
       
      ]),
    });
  }

  signinUser(){
    let values = this.signInForm.value;
    this.accountService.SignIn(values).subscribe( 
      (response:any)=>{
      
        
        console.dir(response.data);
        if(response.status==200){
          this.toastr.success("Signin Success")
          localStorage.setItem("token",response.data.token);
          this.router.navigate(['/dashboard'])
        }
        else{
          
        }

        this.resetForm();
      });
  }
}
