import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit,OnDestroy {
  autoriser = false
  num_produit_choisie=0
  tout_prdouit_choisie:any[]=[]


  constructor(private router:Router, private userService:UsersService) {



   }

  ngOnInit(): void {
  this.userService.autoriser.subscribe((val)=>{
    this.autoriser=val
    })
this.userService.prod_chosen.subscribe(res=>{
  console.log("from navbar "+res);
  this.tout_prdouit_choisie=res
  this.userService.nb_produits_choisie = res.length
 this.num_produit_choisie =  this.userService.nb_produits_choisie
})

  }


 logOut(){
 // this.autoriser=false

   this.router.navigateByUrl('/login').then(()=>{
    localStorage.removeItem('logID')
    localStorage.removeItem('userID')
    localStorage.removeItem('userId')
    localStorage.setItem('userId','0')

    this.userService.setValue_toObserver(false)
   this.autoriser=false
   })

 }

 consulter_liste_choisie(){
  console.log("touts les produits choisie "+this.tout_prdouit_choisie);

 }





 ngOnDestroy(): void {


 }


}
