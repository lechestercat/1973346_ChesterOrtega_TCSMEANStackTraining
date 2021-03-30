import { Component, OnInit } from '@angular/core';
import { Questions } from '../questions.model';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  questions:Array<Questions>=[];
  constructor(public quesSer:QuestionsService) { }

  ngOnInit(): void {
    this.quesSer.loadEmployeeDetails().subscribe(result=>this.questions=result,
      error=>console.log(error))
  }

}
