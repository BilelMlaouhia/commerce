import { HttpClient } from '@angular/common/http';
import { Injectable, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ProductInterface } from '../interfaces/product-interface';
import { UserInterface } from '../interfaces/user-interface';
import {  multicast } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UsersService implements OnInit, OnDestroy,OnChanges {
res:boolean=false
canDesActivate= new Subject<boolean>()

canDesActivate$=this.canDesActivate.asObservable()
prod_edit:any
les_produit_choisie:any=[] 
prod=new Subject<any[]>()
prod_chosen =this.prod.asObservable()
nb_produits_choisie?:number
utilisateur_autoriser = new Subject<boolean>()
autoriser = this.utilisateur_autoriser.asObservable()
multicast=this.prod.pipe(multicast(this.prod))
users ?:UserInterface[]
products:any
emailFound=false
passwordCorrect=false
allUsers:any
user:any
newUser:UserInterface={
  id:0,
  email:'',
  image:'',
  nom:'',
  prenom:'',
  password:'',
  role:'user'
}
currentUser:UserInterface={
  id:0,
  email:'',
  image:'',
  nom:'',
  prenom:'',
  password:'',
  role:''
}


  constructor(private http:HttpClient) {
    this.setValue_toObserver(false)
   
  }

  ngOnInit(): void {
  this. isLoggedIn()
  }

  ngOnChanges(changes: SimpleChanges): void {
      
  }

  ngOnDestroy(): void {
      
  }
  
  onSendStatus(status:boolean){
  this.utilisateur_autoriser.next(status)
  }

  onGetAllProducts(){
  
   return new Promise((resolve,reject)=>{
    this.http.get<ProductInterface[]>(' http://localhost:3000/products').toPromise().then ((data)=>{
  if(data){
    this.products=data
     // console.log('from service '+JSON.stringify(this.products));
      resolve(this.products)
      return this.products
  }else {
    reject("can not find products")
  }
      
       
    })
   })

  }

  onGetAllUsers(){
    return new Promise((resolve,reject)=>{
    this.http.get<UserInterface[]>(" http://localhost:3000/users").subscribe((data)=>{
      resolve(data)
      return data
    })


    })
  }
  
  onFind_User_By_Email_And_Password(f:any){
  
 return new Promise((resolve,reject)=>{
  this.onGetAllUsers().then((data)=>{
    this.allUsers=data
     }).then(()=>{
       for (let i=0;i<this.allUsers.length;i++){
         if(this.allUsers[i].email===f.email){
           this.emailFound=true
           console.log("email correct ");
           
           if(this.allUsers[i].password===f.password){
             this.passwordCorrect=true
             console.log("password correct ");
            this.http.get<UserInterface>(" http://localhost:3000/users/"+this.allUsers[i].id).subscribe((data)=>{
              this.user=data
              this.currentUser=this.user
              localStorage.setItem('logID',`${this.currentUser.id} `)
              this.utilisateur_autoriser?.next(true)
              resolve(this.user)
              
            
           })
          break
            
 
           }else{
            if(i==this.allUsers.length-1) {this.passwordCorrect=false
             console.log("wrong password ");
             this.user=null
             reject("wrong password")}
           }
         }else {
          if(i==this.allUsers.length-1){this.emailFound=false
           console.log("wrong email or not found");
           this.user=null
           reject("wrong email or not found")}
         }
       }
       
      //  return this.user
     }).catch(err=>{
       console.log("error to find user "+err);
       
     })

 })

  }
   

 on_Post_New_User(f:any){
 return new Promise((resolve,reject)=>{
  this.onGetAllUsers().then((data)=>{
    let l:any
    l=data
    this.newUser.id=1+l[-1+l.length].id
  }).then(()=>{
  this.newUser.nom = f.nom
  this.newUser.prenom = f.prenom
  this.newUser.email =  f.email
  this.newUser.password = f.password
  this.newUser.image = f.image
   return this.newUser
  }).then((Nuser)=>{
   this.http.post('http://localhost:3000/users',Nuser).subscribe((res)=>{
     console.log(res+ "the new user is "+ Nuser);
     this.currentUser=Nuser
     localStorage.setItem('Id',`${this.currentUser.id}`)
     this.utilisateur_autoriser?.next(true)
     resolve(Nuser)
   })
  }).catch(err=>console.log(err))
 })

 }
 
  on_Delete_User(id:number){
    return new Promise((resolve,reject)=>{
  this.http.delete('http://localhost:3000/users/'+id).subscribe((res)=>{
    console.log(res);
    resolve(res)
  })

    }).catch(err=>console.log(err))
  }

  onGet_User_By_ID(id:any){
 return new Promise((resolve,reject)=>{
  this.http.get('http://localhost:3000/users/'+id).subscribe((data)=>{
    let d:any=data
   this.currentUser=d
   resolve(this.currentUser)
  })
 }).catch(err=>console.log(err)
 )
  }

  delete_produit(u:any){
    return new Promise((resolve,reject)=>{
     this.http.delete('http://localhost:3000/products/'+u.id).subscribe((res)=>{
       if(res) resolve(res + 'deleted')
       else reject('not deleted ')
      
     })


    })
  }

  collection_Produits(p:any):Observable<any>{
    this.les_produit_choisie=p
    this.prod.next(p)
    return p
  }

 setValue_toObserver(v:boolean){
  
   return this.canDesActivate.next(v)

 }
 isLoggedIn():boolean | Observable<boolean>{
   
    this.canDesActivate$.subscribe((e)=>{
     this.res=e
    });

    return this.res
 }

   send_Product(p:any){
     this.prod_edit=p
     return p
   }


}
