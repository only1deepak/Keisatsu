import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes =[
  
  {
    path: '',
    redirectTo: 'public-appointment',
    pathMatch: 'full'
  },

  {
    path: 'public-appointment',
    loadChildren: () => import('./public-appointment/public-appointment.module').then( m => m.PublicAppointmentPageModule)
  },

  

  
 ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
