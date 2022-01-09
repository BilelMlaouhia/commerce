import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-edit-produit',
  templateUrl: './edit-produit.component.html',
  styleUrls: ['./edit-produit.component.scss']
})
export class EditProduitComponent implements OnInit {

  original_Product:any
 product_Edited=false
  constructor(private userService:UsersService,private http:HttpClient, private router:Router) {
    this.original_Product=this.userService.prod_edit
   }

  ngOnInit(): void {
  this.newProduit.setValue({
    id:this.original_Product.id,
    nom:this.original_Product.nom,
    image:this.original_Product.image,
    description:this.original_Product.description,
    prix:this.original_Product.prix,
    type:this.original_Product.type,
    userId:this.original_Product.userId
  })

  }

  newProduit:FormGroup=new FormBuilder().group({
  id:[0,Validators.required],
  nom:['',Validators.required],
  image:['',Validators.required],
  description:['',[Validators.required,Validators.minLength(15)]],
  prix:[null,Validators.required],
  type:['',Validators.required],
  userId:[0,Validators.required]
  })
  
  onPost_Changes(){
 this.post_changement().then((res)=>{
  // console.log('resultat depuis onPost_changes '+res);
   
   setTimeout(() => {
     this.router.navigateByUrl('/myproduits')
   }, 600);
 }).catch(err=>{console.log('post changes pour editier produit errors '+err);
 })

  }

  control_Name(nom:string){
    return this.newProduit.get(nom)
  }
  
  post_changement(){
    return new Promise ((resolve,reject)=>{
      this.http.put('http://localhost:3000/products/'+this.newProduit.value.id,this.newProduit.value).subscribe((res)=>{
      //  console.log('Produit modifier '+JSON.stringify(res));
        resolve(res)
      })
     console.log(this.newProduit.value);
     this.product_Edited =true
    })
  }
  

}
