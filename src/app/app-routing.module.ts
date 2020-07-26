import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes =[
  
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  
  {
    path: 'public-home',
    loadChildren: () => import('./public-home/public-home.module').then( m => m.PublicHomePageModule)
  },
  {
    path:'public-fir',
    loadChildren: () => import('./public-fir/public-fir.module').then( m => m.PublicFIRPageModule)
  },
  {
    path: 'public-noc',
    loadChildren: () => import('./public-noc/public-noc.module').then( m => m.PublicNOCPageModule)
  },

  {
    path: 'public-appointment',
    loadChildren: () => import('./public-appointment/public-appointment.module').then( m => m.PublicAppointmentPageModule)
  },
  {
    path: 'police-auth',
    loadChildren: () => import('./police-auth/police-auth.module').then( m => m.PoliceAuthPageModule)
  },
  {
    path: 'admin-auth',
    loadChildren: () => import('./admin-auth/admin-auth.module').then( m => m.AdminAuthPageModule)
  },


  

  
 ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
