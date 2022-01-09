
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
chosen_products:any=[0]


  constructor(private userService:UsersService) {
   
   }

  ngOnInit(): void {
   this.getProducts()
   for(let i=0;i<this.products.length;i++){
    this.show[i]=false
  }
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
    if(this.chosen_products[0]!=0)
    {this.chosen_products[this.chosen_products.length]=item
    }else this.chosen_products[0]=item
    this.userService.collection_Produits(this.chosen_products)
    
    
  }


  ngOnDestroy(): void {
     
  }
}
