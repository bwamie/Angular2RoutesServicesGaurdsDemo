import { Component, OnInit } from '@angular/core';
import { DbService } from './db.service'

@Component({
  selector: 'app-students',
  template: `
    <div>
      <ul>
        <li *ngFor="let student of students" ><a [routerLink]="['profile', student.id]">{{student.name}}</a></li>
      </ul>
    </div>
  `,
  styles: []
})
export class StudentsComponent implements OnInit {

public students: Object;
  constructor(private studentsService: DbService) {
    this.students = studentsService.getData();
  }


  ngOnInit() {
  }

}
