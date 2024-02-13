import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  username:string = "Chero";
  password:string = "chero@123";

  wrong:boolean = false;
  constructor(private router: Router) { }
  login(x:string,y:string): void {
    if(x===this.username && y===this.password){
      this.router.navigateByUrl('/home');
      this.changeflag()
    }else{
      this.wrong=true;
    }
    
    
  }
  title = 'Dashboard';
  flag:boolean =false;
  flag2:boolean = true;

  changeflag(){
    this.flag = true;
    this.flag2 = false;
  }

  
  
  
}
