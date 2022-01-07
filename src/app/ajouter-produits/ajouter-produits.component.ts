import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-ajouter-produits',
  templateUrl: './ajouter-produits.component.html',
  styleUrls: ['./ajouter-produits.component.scss']
})
export class AjouterProduitsComponent implements OnInit {
 product_new:any
 product_Added=false
  constructor(private userService:UsersService,private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
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
  
  control_Name(name:string){
  return this.newProduit.get(name)
  }
   
  ajouter_Produit(){
    
    this.userService.onGetAllProducts().then(data=>{
      let ID:any=localStorage.getItem('userId')
      this.newProduit.value.userId=ID
      let d:any=data
      this.newProduit.value.id= d[d.length-1].id+1
    }).then(()=>{
      this.http.post('http://localhost:3000/products',this.newProduit.value).subscribe((res)=>{
        console.log(res);
        this.product_Added=true
        
      })
     
    }).then(()=>{
      setTimeout(()=>{
        this.router.navigate(['/myproduits'])
      },1200)
    })
    .catch(err=>console.log(err) )
    
     

  }
  

}
