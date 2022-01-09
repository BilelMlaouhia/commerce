import { Inject, Injectable, Injector } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UsersService } from '../services/users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userService:UsersService, private router: Router){

  }


  canActivate(
  ):any|  boolean  {
let res=Number(localStorage.getItem('userId'))
 console.log("value of return "+res);
 if(res==0 || res==undefined|| res ==null){this.router.navigateByUrl('/login').then((r)=>{
   console.log("from auth guard routed "+r);
   return false})
  }else 
   return true
  

  }

}
