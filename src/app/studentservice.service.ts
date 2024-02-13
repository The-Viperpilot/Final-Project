import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentserviceService {

  baseApiUrl:string = "https://localhost:7054";

  constructor(private http:HttpClient) {   }

  getAllStudents():Observable<Student[]>
  {
    return this.http.get<Student[]>(this.baseApiUrl+'/api/students');
  }
  
  addStudent(addStudentRequest:Student):Observable<Student[]>
  {
    addStudentRequest.id = 1;
    return this.http.post<Student[]>(this.baseApiUrl+'/api/students',addStudentRequest);
  }

  getStudentById(id: number): Observable<Student>{
    return this.http.get<Student>(this.baseApiUrl + '/api/students/'+id);
  }


  updateStudent(id:number,updateStudentrequest:Student):Observable<Student[]>{
    return this.http.put<Student[]>(this.baseApiUrl+'/api/students/update/'+id,updateStudentrequest);
  }

  deleteStudent(id:number):Observable<Student>{
    return this.http.delete<Student>(this.baseApiUrl+'/api/students/'+id);
  }

  

}
