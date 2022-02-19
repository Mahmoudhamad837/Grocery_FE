import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {path: '', redirectTo: 'addresses', pathMatch: 'full'},
  {path: 'addresses', component: AddressComponent},
  {path: 'add', component: EditComponent},
  {path: 'edit/:id', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddressRoutingModule { }
