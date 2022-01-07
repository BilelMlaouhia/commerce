import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-consulter-produits-choisie',
  templateUrl: './consulter-produits-choisie.component.html',
  styleUrls: ['./consulter-produits-choisie.component.scss']
})
export class ConsulterProduitsChoisieComponent implements OnInit {

  myProducts:any[]=[]
  product_deleted:any[]=[]
  show:any[]=[]

  constructor(private userService:UsersService) {
    this.userService.prod_chosen.subscribe((res)=>{
      this.myProducts=res
   
 })
   }

  ngOnInit(): void {
  
  console.log("from consulter "+JSON.stringify(this.myProducts));
  for(let i=0;i<this.myProducts.length;i++){
    this.show[i]=false
  }

  }

  showDetails(i:number){
  this.show[i]=true
  }

  deleteProduct(i:number){
    let k=0
    for(let j=0;j<this.myProducts.length;j++){
      if(this.myProducts[i]!=this.myProducts[j]){ 
         this.myProducts[j]=this.myProducts[k]
      k++
    }
    }
  }



}
