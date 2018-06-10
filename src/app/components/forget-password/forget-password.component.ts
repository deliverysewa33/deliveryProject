import { Component, OnInit } from '@angular/core';
import { Delivery } from '../../model/delivery';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ResetPasswordService } from '../../services/reset-password.service';


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  model= new Delivery();
  submitted=false;
  success:boolean = false;
  error:boolean = false;
  message:string;
  constructor(private router: Router,private resetService:ResetPasswordService) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm){

    this.submitted = true;
     console.log(form.value);
    this.resetService.forgetPassword(form.value).subscribe(data=>{
      console.log("Credentials",data);
      form.reset();
      this.message = "Check your  Email for reset link "

    },
 error=>{
     this.error = true;
     
     if(error.error['message']){
       this.message = error.error['message'];
     }
     else{
       this.message = error.message;
     }
 
   });

  }
}
