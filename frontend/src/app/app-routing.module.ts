import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterClientComponent } from './components/client/register-client/register-client.component';
import { ClientsCrudComponent } from './views/clients-crud/clients-crud.component';

const routes: Routes = [
  {
  path:"",
  component: ClientsCrudComponent
  },
  {
    path:"register",
    component: RegisterClientComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
