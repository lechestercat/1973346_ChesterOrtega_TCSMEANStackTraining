import { Component, OnInit } from '@angular/core';
import { Tasks } from '../tasks.model';
import { TasksServiceService } from '../tasks-service.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Array<Tasks> = [];
  constructor(public taskSer: TasksServiceService) {}

  ngOnInit(): void {
    this.taskSer.loadTaskDetails().subscribe(
      (result) => (this.tasks = result),
      (error) => console.log(error)
    );
  }

  submitTask(userRef: any) {
    console.log('Event generated');
    console.log(userRef);
    this.taskSer.storeTasks(userRef);
  }
}
