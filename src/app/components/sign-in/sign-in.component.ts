import { Component, OnInit } from '@angular/core';
import { Delivery } from '../../model/delivery';
import { FormControl, FormGroup } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  model = new Delivery();
  submitted = false;
  success:boolean = false;
  error:boolean = false;
  message:string;
  constructor(private router: Router,private userService:UserServiceService) { }

  ngOnInit() {
  }
  
  onSubmit(form: NgForm) {
    this.submitted = true;
   // console.log(form.value);
    console.log(form.value);
    this.userService.signInUser(form.value).subscribe(data=>{
      console.log("Credentials",data);
      
      this.router.navigate(['/adminDashboard']);

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
