import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentserviceService } from '../studentservice.service';
import { Student } from '../student';

@Component({
  selector: 'app-showdetailbyid',
  templateUrl: './showdetailbyid.component.html',
  styleUrls: ['./showdetailbyid.component.scss']
})
export class ShowdetailbyidComponent implements OnInit {

  op:boolean = false;
  cl:boolean = true;

  progressValue = 0;
  color: string = 'green';
  get offset(): number {
    if (this.progressValue === undefined) return this.circumference;
    const progressOffset = ((100 - this.progressValue) / 100) * this.circumference;
    return progressOffset;
  }

  get circumference():number{
    return 2* Math.PI * 40;
  }
  studentDetails: Student = {
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

  navigateToShowDetail(studentId: string): void {
   
    if (studentId) {

      this.router.navigate(['/showdetailbyid', studentId]);
    } else {

      alert('Student ID is empty');
    }
  }

  constructor(private route: ActivatedRoute, private studentService:StudentserviceService,private router:Router){}



  ngOnInit():void{
    this.route.paramMap.subscribe({
      next:(params) => {
         const id = params.get('id');

        if(id){
        this.studentService.getStudentById(Number(id)).subscribe({
         next: (response) => {
          this.studentDetails = response;
          this.progressValue =100- this.studentDetails.absence;
          if(this.progressValue >75){
            this.color='#198754';
          }else if(this.progressValue >45){
            this.color = '#FFC107';
          }else{
            this.color = '#DC3545';
          }

          if(this.studentDetails.tuitionfee=='Paid'){
            this.op = true;
            this.cl = false;
          }else{
            this.op = false;
            this.cl = true;
          }
          }
        })
        }
      }
    })
  }

  

}
