import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { FooterComponent } from './footer/footer.component';
import { AdddetailComponent } from './adddetail/adddetail.component';
import { ShowdetailComponent } from './showdetail/showdetail.component';
import { TopbarComponent } from './topbar/topbar.component';
import { HttpClientModule } from '@angular/common/http';
import { EditdetailComponent } from './editdetail/editdetail.component';
import { ShowdetailbyidComponent } from './showdetailbyid/showdetailbyid.component';








@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomescreenComponent,
    FooterComponent,
    AdddetailComponent,
    ShowdetailComponent,
    TopbarComponent,
    EditdetailComponent,
    ShowdetailbyidComponent

   



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
