import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-consulter-produits-choisie',
  templateUrl: './consulter-produits-choisie.component.html',
  styleUrls: ['./consulter-produits-choisie.component.scss']
})
export class ConsulterProduitsChoisieComponent implements OnInit,OnDestroy {
  
  myProducts:any[]=[]
  product_deleted:any[]=[]
  show:any[]=[]

  constructor(private userService:UsersService) {
  
   }

  ngOnInit(): void {
  
   this.myProducts= this.userService.les_produit_choisie

  for(let i=0;i<this.myProducts.length;i++){
    this.show[i]=false
  }

  }

  
  showDetails(i:number){
  this.show[i]=!this.show[i]
  }

  deleteProduct(u:any){
   
   this.myProducts.forEach((p,index)=>{
     if(p==u)this.myProducts.splice(index,1)
   })
  console.log("after deleting items"+this.myProducts);

  this.userService.prod.next(this.myProducts)

  }
  
  total_achat(){
    let tot=0
    for(let i=0;i<this.myProducts.length;i++){
          tot=tot+this.myProducts[i].prix
    }
   return tot
  }

  

ngOnDestroy(): void {
    
}

}
