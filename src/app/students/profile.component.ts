import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DbService} from './db.service';

@Component({
  selector: 'app-profile',
  template: `
    <div>
     <div>Name: {{student.name}}</div>
     <div>Email: {{student.email}}</div>
    </div>
  `,
  styles: []
})
export class ProfileComponent implements OnInit {

public student: any;

  constructor(private activatedRoute: ActivatedRoute, private dbService: DbService) { 
this.student=this.dbService.getStudent(this.activatedRoute.snapshot.params['id']);
  }

  ngOnInit() {

  }

}
