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
  count:number = 0;
  selectedAnswer:any =[];
  examSubmitted:boolean = false;
  constructor(public quesSer:QuestionsService) { }

  ngOnInit(): void {
    this.quesSer.loadQuestionDetails().subscribe(result=>this.questions=result,
      error=>console.log(error))
  }

  submitExam(selectedAnswer:any){
    this.examSubmitted = true;
    console.log("Submitted");
    console.log(selectedAnswer);
    for(let i = 0; i < selectedAnswer.length;i++){
      if(selectedAnswer[i] == this.questions[i].answer){
        console.log("correct");
        this.count++;
      }else{
        console.log("wrong");
      }
    }
  }
  highlightAnswer(index:number) {
    if(this.examSubmitted && this.selectedAnswer[index] == 
      this.questions[index].answer) {
      return 'background-color:green'
    }
    else if(this.examSubmitted && this.selectedAnswer[index] != 
      this.questions[index].answer) {
        return 'background-color:red'
      }
      return '';
  }

}
