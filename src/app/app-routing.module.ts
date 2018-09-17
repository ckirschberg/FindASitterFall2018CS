import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { Simon2Component } from './home/simon2/simon2.component';
import { HenrikComponent } from './home/henrik/henrik.component';

const routes: Routes = [  { 
  path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent, children: 
    [
      {path: 'simon', component: Simon2Component},
      {path: 'henrik', component: HenrikComponent}
    ]
  },

  {path: 'contact', component: ContactComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
