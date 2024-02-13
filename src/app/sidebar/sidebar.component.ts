import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  showMee:boolean=true;
  showMe:boolean=false;
  min:boolean = false;
  clsbtn:boolean = false
  toggleTag(){
    this.showMe = !this.showMe
    this.showMee = !this.showMee
    if(this.min==true){
      this.min = false;
    }
  }
  
  close(){
    this.min = !this.min
    this.showMe = !this.showMe

  } 
  open(){
    this.showMe = !this.showMe
    this.min = !this.min
  }
  
}
