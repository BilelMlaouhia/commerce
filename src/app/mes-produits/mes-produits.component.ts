import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductInterface } from '../interfaces/product-interface';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-mes-produits',
  templateUrl: './mes-produits.component.html',
  styleUrls: ['./mes-produits.component.scss']
})
export class MesProduitsComponent implements OnInit {
  users:any
  products:any
  myProducts:any=[]
  show:boolean[]=[]
  index_product=0
  current_product:ProductInterface[]=[]
  userID:any
  product_deleted:boolean[]=[]
  
    constructor(private userService:UsersService,private router:Router) {
     this.userID=localStorage.getItem('userId')
     }
  
    ngOnInit(): void {
     this.getProducts()
     for(let i=0;i<this.myProducts.length;i++){
      this.show[i]=false
      this.product_deleted[i]=false
    }
    }
  
    getProducts(){
          
  this.userService.onGetAllProducts().then((data:any)=>{
    this.products=data
    console.log("from home component "+this.products);
    let j=0
   for(let i=0;i<this.products.length;i++){
     if(this.products[i].userId==this.userID){
       this.myProducts[j]=data[i]
       j++
     }
   }
  console.log("from mes produits line 43"+JSON.stringify(this.myProducts));
  
  }).catch(err=>console.log(err))


    }
    
    
    showDetails(i:number){
      
     
      this.index_product=i
      this.show[i]=!this.show[i]
    }
  
    ngOnDestroy(): void {
       
    }

    deleteProduct(u:any,i:number){
      this.userService.delete_produit(u).then((data)=>{
        console.log("deleted "+data);
        this.product_deleted[i]=true
      
     setTimeout(()=>{
      this.router.navigateByUrl('/home').then(()=>{
        this.router.navigateByUrl('/myproduits')
      })
      },1200)
      })
     
     
    }
  

}
