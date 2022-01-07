import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  usedEmail=false
   

  constructor(private userService:UsersService, private snackBar:MatSnackBar,private router:Router) { }

  ngOnInit(): void {
  }


  postDetails(f:any){
    this.userService.on_Post_New_User(f).then((user)=>{
      this.snackBar.open('account created succefully ')
      let u:any =user
      localStorage.setItem("userID",`${u.id}`)
      this.userService.onSendStatus(true)
      setInterval(()=>{
       this.router.navigateByUrl('myprofile') 
      },1500)
    })
     

  }
  
  checkEmail(email:String){
  this.userService.onGetAllUsers().then((data)=>{
 let d:any
 d=data
   for (let i=0;i<d.length;i++){
      if(d[i].email==email){
        this.usedEmail=true
        break
      }else {
        this.usedEmail=false
      }
   }

  }).catch((err)=>console.log(err))


  }
}
