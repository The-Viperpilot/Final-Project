import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentserviceService } from '../studentservice.service';
import { Student } from '../student';


@Component({
  selector: 'app-editdetail',
  templateUrl: './editdetail.component.html',
  styleUrls: ['./editdetail.component.scss']
})
export class EditdetailComponent implements OnInit {

  studentDetail: Student = {
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

constructor(private route: ActivatedRoute, private studentService:StudentserviceService,private router:Router){}

  ngOnInit():void{
    this.route.paramMap.subscribe({
      next:(params) => {
         const id = params.get('id');

        if(id){
        this.studentService.getStudentById(Number(id)).subscribe({
         next: (response) => {
          this.studentDetail = response;
          console.log(response);
          }
        })
        }
      }
    })
  }

  updateStudent(){
    this.studentService.updateStudent(this.studentDetail.id,this.studentDetail).subscribe({
      next:(responce)=>{
        this.router.navigate(['showdetail']);
        console.log(responce);
      },
      error:(responce)=>{
        console.log(responce);
      }
    });
}

}
