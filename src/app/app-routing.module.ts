import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: 'auth', loadChildren: ()=> import('./auth/auth.module').then(m=>m.AuthModule) },
  { path:'pages', loadChildren:()=>import('./pages/pages.module').then(m=>m.PagesModule) },
  { path: '404', component: NotFoundComponent},
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
