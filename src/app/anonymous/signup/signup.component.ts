import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup  ;
  constructor( 
    private formBuilder: FormBuilder, 
    private accountService:AccountService,
    private toastr: ToastrService
    ) {
    this.resetForm();
   }

  ngOnInit(): void {
  }


  resetForm(){
    this.signupForm = new FormGroup({
      name: new FormControl("", [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250),
      ]),

      dateOfBirth: new FormControl("", [
        Validators.maxLength(500),
        
      ]),
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

  registerUser(){
    let values = this.signupForm.value;
    this.accountService.Register(values).subscribe( 
      (response:any)=>{
      
        
        
        if(response.succeeded==true){
          this.toastr.success("Registration Success")
        }
        else{
          this.toastr.error("Something wrong happend")
        }

        this.resetForm();
      }
     

    );
    
  }
}
