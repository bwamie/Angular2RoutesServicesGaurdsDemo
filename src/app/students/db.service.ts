import { Injectable } from '@angular/core';

@Injectable()
export class DbService {

  public data: Object;
  constructor() {
    this.data = [
      { id: '1', name: 'Asaad Saad', email: 'asaad@mum.edu' },
      { id: '2', name: 'Edwin Bwambale', email: 'bwamie@gmail.com' },
      { id: '3', name: 'Biira Jackie', email: 'jackie@gmail.com' }
    ];
  }

  getData() {
    return this.data;
  }

  getStudent(id) {
    console.log(id);
    for (const student in this.data) {
      if (this.data[student].id == id) {
        return this.data[student];
      }

    }
  }

}
