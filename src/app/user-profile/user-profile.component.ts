import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { UserInterface } from '../interfaces/user-interface';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  
connectedUser:UserInterface={
  id:0,
  nom:'',
  prenom:'',
  password:'',
  image:'',
  role:'',
  email:''
}
connected?:Subject<UserInterface>



  constructor(private userService:UsersService) { 
  if(localStorage.getItem('logID')){
    let id=localStorage.getItem('logID')
     this.userService.onGet_User_By_ID(id).then((data)=>{
       let d:any
       d=data
       this.connectedUser=d
     })
  }else if(localStorage.getItem('userID')){
    let ID=localStorage.getItem('logID')
     this.userService.onGet_User_By_ID(ID).then((data)=>{
       let d:any
       d=data
       this.connectedUser=d
     })
  }


  }

  ngOnInit(): void {
    this.onGet_Current_User()
  }

  onGet_Current_User(){
 this.connectedUser=this.userService.currentUser
    console.log("connected user is: "+JSON.stringify(this.connectedUser))
  }

}
