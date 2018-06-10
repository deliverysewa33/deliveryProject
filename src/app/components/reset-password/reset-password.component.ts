import { Component, OnInit } from '@angular/core';
import { Delivery } from '../../model/delivery';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {ActivatedRoute} from "@angular/router";
import { ResetPasswordService } from '../../services/reset-password.service';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  model= new Delivery();
  submitted=false;
  success:boolean = false;
  error:boolean = false;
  message:string;
  token:string;
  sub:any;
  constructor(private router: Router,private resetService:ResetPasswordService,private route: ActivatedRoute) { 
   
  }


  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.token = params['token']; 

   });
  }

  onSubmit(form: NgForm){
    this.submitted = true;
    this.resetService.resetPassword(form.value,this.token).subscribe(data=>{
      form.reset();
      this.message = "Password Changed Login to continue "
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
