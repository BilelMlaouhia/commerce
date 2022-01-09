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
  ):  boolean | Observable<boolean>  {
let res=this.userService.isLoggedIn()
 console.log("value of return "+res);
 if(!res){this.router.navigateByUrl('/login').then((r)=>{
   console.log("from auth guard routed "+r);
   
 })}
 return res

  }

}
