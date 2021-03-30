import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tasks } from './tasks.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TasksServiceService {
  constructor(public http: HttpClient) {}

  loadTaskDetails(): Observable<Tasks[]> {
    return this.http.get<Tasks[]>('http://localhost:3000/tasks');
  }

  storeTasks(tsk: any) {
    this.http.post('http://localhost:3000/tasks', tsk).subscribe(
      (result) => console.log(result),
      (error) => console.log(error)
    );
  }
}
