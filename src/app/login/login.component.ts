import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
currentUser:any
err:any
  constructor(private userService:UsersService, private router:Router) { 


  }

  ngOnInit(): void {
  }


  postDetails(f:any){
  this.userService.onFind_User_By_Email_And_Password(f).then((val)=>{
    let v :any=val
    console.log("the v value "+JSON.stringify(v) );
    this.currentUser=v

  return this.currentUser
  }).then((u)=>{
   if(this.currentUser.id){
     console.log("the user "+JSON.stringify(u));
     this.userService.onSendStatus(true)
     localStorage.setItem('userId',`${u.id}`)
     this.userService.setValue_toObserver(true)
     
     this.router.navigate(['/myprofile'])
   }else {
     this.router.navigateByUrl('/login')
   }
  }).catch(err=>this.err=err)

  }

}
