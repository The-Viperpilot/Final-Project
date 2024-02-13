import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { AdddetailComponent } from './adddetail/adddetail.component';
import { ShowdetailComponent } from './showdetail/showdetail.component';
import { EditdetailComponent } from './editdetail/editdetail.component';
import { ShowdetailbyidComponent } from './showdetailbyid/showdetailbyid.component';




const routes: Routes = [
  {
  path: 'home',
 component:HomescreenComponent
  },
  {
    path : 'adddetail',
    component:AdddetailComponent
  },
  {
    path:'showdetail',
    component:ShowdetailComponent
  },
  {
    path:'editdetail/:id',
    component:EditdetailComponent
  },
  {
    path:'showdetailbyid/:id',
    component:ShowdetailbyidComponent
  },
  {
    path:'showdetailbyid',
    component:ShowdetailbyidComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
