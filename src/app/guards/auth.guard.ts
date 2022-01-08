import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UsersService } from '../services/users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userService:UsersService, private router:Router){

  }


  canActivate(
  ):any|  boolean | Observable<boolean>  {
   let auth:any 
return this.userService.isLoggedIn().pipe(map(e=>{
  if(e) return true;
}))

return false;

}
}