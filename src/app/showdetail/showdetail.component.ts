import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { response } from 'express';
import { StudentserviceService } from '../studentservice.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-showdetail',
  templateUrl: './showdetail.component.html',
  styleUrls: ['./showdetail.component.scss']
})
export class ShowdetailComponent implements OnInit {
  isBlurred: boolean = false;

  applyBlur() {
    this.isBlurred = !this.isBlurred;
  }
  
popup:boolean = false;
hidepop(){
  if(this.popup == true){
    this.popup = false;
  }
}
openpop(){
  this.popup = !this.popup
}
  students :Student[]=[];
  

  statuses!: any[];
  
  activityValues: number[] = [0, 100];
  constructor(private studentService:StudentserviceService,private router:Router){};
  
  ngOnInit():void{
    this.studentService.getAllStudents()
    .subscribe({
      next:(students)=>{
        this.students=students;
      },
      error:(response)=>
      {
        console.log(response);
      }
      
      
    })
  }
  temp:number =0;
  calldelete(id:number){
      this.temp = id;
  }
  confirmDelete(){
    this.deleteStudent(this.temp);
  }

  deleteStudent(id : number){
    this.studentService.deleteStudent(id).subscribe({
      next:(response)=>{
        this.router.navigate(['showdetail']);
      },
      error:(response) =>{
        console.log(response);
      }
    });
  }
  
  

  //  tableData : any = [
  //   {
  //     'si':'1',
  //     'first_name' : 'Karthick',
  //     'initial' : 'S',
  //     'emp_id' : '23452',
  //     'dob':'28/03/2003',
  //     'ph_number' : '6383838596',
  //     'role' : 'Developer',
  //     'Status' : 'Available',
  //     'city' : 'Salem'
  //   },
  //   {
  //     'si':'2',
  //     'first_name' : 'Dinesh',
  //     'initial' : 'S',
  //     'emp_id' : '62376',
  //     'dob':'01/01/2001',
  //     'ph_number' : '8072295809',
  //     'role' : 'Designer',
  //     'Status' : 'Unavailable',
  //     'city' : 'Chennai'
  //   },
  //   {
  //     "si": "3",
  //     "first_name": "John",
  //     "initial": "D",
  //     "emp_id": "12345",
  //     "dob": "01/01/1990",
  //     "ph_number": "1234567890",
  //     "role": "Engineer",
  //     "Status": "Available",
  //     "city": "Exampleville"
  //   },
  //   {
  //     "si": "4",
  //     "first_name": "Alice",
  //     "initial": "M",
  //     "emp_id": "56789",
  //     "dob": "15/07/1985",
  //     "ph_number": "9876543210",
  //     "role": "Designer",
  //     "Status": "Unavailable",
  //     "city": "Wonderland"
  //   },
  //   {
  //     "si": "5",
  //     "first_name": "Ethan",
  //     "initial": "R",
  //     "emp_id": "98765",
  //     "dob": "02/12/1995",
  //     "ph_number": "8765432109",
  //     "role": "Analyst",
  //     "Status": "Available",
  //     "city": "Techburg"
  //   },{
  //     "si": "6",
  //     "first_name": "Linda",
  //     "initial": "K",
  //     "emp_id": "34567",
  //     "dob": "10/05/1988",
  //     "ph_number": "7890123456",
  //     "role": "Manager",
  //     "Status": "Available",
  //     "city": "Metropolis"
  //   },
  //   {
  //     "si": "7",
  //     "first_name": "Michael",
  //     "initial": "P",
  //     "emp_id": "89012",
  //     "dob": "22/09/1979",
  //     "ph_number": "6543210987",
  //     "role": "Administrator",
  //     "Status": "Unavailable",
  //     "city": "Techville"
  //   },
  //   {
  //     "si": "8",
  //     "first_name": "Sophia",
  //     "initial": "G",
  //     "emp_id": "45678",
  //     "dob": "05/03/1993",
  //     "ph_number": "8901234567",
  //     "role": "Consultant",
  //     "Status": "Available",
  //     "city": "Innovation City"
  //   },
  //   {
  //     "si": "9",
  //     "first_name": "Ryan",
  //     "initial": "W",
  //     "emp_id": "78901",
  //     "dob": "12/11/1982",
  //     "ph_number": "5678901234",
  //     "role": "Tester",
  //     "Status": "Available",
  //     "city": "Qualityville"
  //   },
  //   {
  //     "si": "10",
  //     "first_name": "Olivia",
  //     "initial": "L",
  //     "emp_id": "23456",
  //     "dob": "18/06/1997",
  //     "ph_number": "9012345678",
  //     "role": "Architect",
  //     "Status": "Available",
  //     "city": "Designopolis"
  //   }
    
    
    
  // ]

  
}
