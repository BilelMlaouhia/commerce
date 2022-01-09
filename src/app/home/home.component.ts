
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductInterface } from '../interfaces/product-interface';
import { UsersService } from '../services/users.service';






@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})



export class HomeComponent implements OnInit,OnDestroy {
users:any
products:any[]=[]
show:boolean[]=[]
index_product=0
current_product:ProductInterface[]=[]
chosen_products:any[]=[]


  constructor(private userService:UsersService) {
  if(this.userService.les_produit_choisie.length!=0) this.chosen_products=this.userService.les_produit_choisie
   }

  ngOnInit(): void {
   this.getProducts()
   for(let i=0;i<this.products.length;i++){
    this.show[i]=false
  }

  // this.userService.prod_chosen.subscribe(res=>{
  //   this.chosen_products=res
  //   console.log("les prods home "+res);

  // })

  }

  getProducts(){

this.userService.onGetAllProducts().then((data)=>{
  let d:any
  d=data
  this.products=d
 // console.log("from home component "+this.products);
})
  }


  showDetails(i:number){

    this.index_product=i
    this.show[i]=!this.show[i]
  }

  add_to_card(item:any){

    if(this.chosen_products[0]!=0 || this.chosen_products[0]!=null){

      this.chosen_products[this.chosen_products.length]=item

    }  else this.chosen_products[0]=item

    this.userService.collection_Produits(this.chosen_products)


  }


  ngOnDestroy(): void {

  }
}
