import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import { UsersService } from '../services/users.service';

@Injectable({
  providedIn: 'root'
})
export class UnAuthGuard implements CanActivate {

  constructor(private userService:UsersService, private router:Router){

  }


  canActivate(
  ):any|  boolean  {
    let res=Number(localStorage.getItem('userId'))
    console.log("value of return "+res);
    if(res==0 || res==undefined|| res ==null){
          return true
    
     }else {this.router.navigateByUrl('/home').then((r)=>{
      console.log("from auth guard routed "+r)
      return true
    })

     }
    }
}
