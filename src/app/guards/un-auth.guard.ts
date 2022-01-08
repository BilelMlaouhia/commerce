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
  //  let auth:any =true
  //  this.userService.canDesActivate$.subscribe(res=>auth=!res)
   
  //   // if(auth==false){
  //   //   this.router.navigateByUrl('/home')
  //   // }
  //   console.log('unAuth '+auth);
    
  //     return auth;
    }

    
  
  
}
