import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterProduitsComponent } from './ajouter-produits/ajouter-produits.component';
import { ConsulterProduitsChoisieComponent } from './consulter-produits-choisie/consulter-produits-choisie.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { EditProduitComponent } from './edit-produit/edit-produit.component';
import { AuthGuard } from './guards/auth.guard';
import { UnAuthGuard } from './guards/un-auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MesProduitsComponent } from './mes-produits/mes-produits.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
{path:'',component:HomeComponent},
{path:'home',component:HomeComponent},
{path:'signup',component:SignUpComponent,canActivate:[UnAuthGuard]},
{path:'login',component:LoginComponent,canActivate:[UnAuthGuard]},
{path:'myprofile',component:UserProfileComponent,canActivate:[AuthGuard]},
{path:'contact',component:ContactUsComponent},
{path:'myproduits',component:MesProduitsComponent,canActivate:[AuthGuard]},
{path:'ajouter-produits',component:AjouterProduitsComponent,canActivate:[AuthGuard]},
{path:'produits-choisie',component:ConsulterProduitsChoisieComponent},
{path:'editProduit',component:EditProduitComponent,canActivate:[AuthGuard]},
{path:'**',component:HomeComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
