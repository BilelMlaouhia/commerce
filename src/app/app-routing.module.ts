import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterProduitsComponent } from './ajouter-produits/ajouter-produits.component';
import { ConsulterProduitsChoisieComponent } from './consulter-produits-choisie/consulter-produits-choisie.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MesProduitsComponent } from './mes-produits/mes-produits.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
{path:'',component:HomeComponent},
{path:'home',component:HomeComponent},
{path:'signup',component:SignUpComponent},
{path:'login',component:LoginComponent},
{path:'myprofile',component:UserProfileComponent},
{path:'contact',component:ContactUsComponent},
{path:'myproduits',component:MesProduitsComponent},
{path:'ajouter-produits',component:AjouterProduitsComponent},
{path:'produits-choisie',component:ConsulterProduitsChoisieComponent},
{path:'**',component:HomeComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
