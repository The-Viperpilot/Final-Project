import { Component, OnInit , ViewChild} from '@angular/core';
import { StudentserviceService } from '../studentservice.service';
import { Route, Router } from '@angular/router';
import { Student } from '../student';



@Component({
  selector: 'app-adddetail',
  templateUrl: './adddetail.component.html',
  styleUrls: ['./adddetail.component.scss']
})
export class AdddetailComponent implements OnInit {
  

  addStudentRequest:Student={
    id:0,
    fullname:'',
    age:0,
    gender:'',
    phonenumber:'',
    emailaddress:'',
    grade:'',
    absence:0,
    tuitionfee:'',
    department:'',
    semester:0,
    parent_name:'',
    parent_contact:'',
    username:'',
    password:''

  }
  constructor(private studentService:StudentserviceService,private router:Router){}



  ngOnInit(): void {
    
  }

  createStudent(){
    this.studentService.addStudent(this.addStudentRequest)
    .subscribe({
      next:(student)=>
      {
        this.router.navigate(['showdetail']);
        console.log(student);
      },
      error:(response)=>
      {
        console.log(response);
      }
    })
  }

 

  
}
