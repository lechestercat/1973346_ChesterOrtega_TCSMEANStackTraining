import { Component, OnInit } from '@angular/core';
import { Questions } from '../questions.model';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css'],
})
export class ExamComponent implements OnInit {
  questions: Array<Questions> = [];
  correctCount: number = 0;
  score: string = '';
  selectedAnswer: any = [];
  examSubmitted: boolean = false;

  constructor(public quesSer: QuestionsService) {}

  /*
    Grabs JSON data from the service.
  */
  ngOnInit(): void {
    this.quesSer.loadQuestionDetails().subscribe(
      (result) => (this.questions = result),
      (error) => console.log(error)
    );
  }

  /*
    Changes submitted exam flag to true. Counts number of correct answers.
  */
  submitExam(selectedAnswer: any) {
    this.examSubmitted = true;
    console.log('Submitted');
    console.log(selectedAnswer);
    for (let i = 0; i < selectedAnswer.length; i++) {
      if (selectedAnswer[i] == this.questions[i].answer) {
        console.log('correct');
        this.correctCount++;
      } else {
        console.log('wrong');
      }
    }

    this.examScore(this.correctCount);
  }

  /*
    Highlights questions answered right green and wrong red.
  */
  highlightQuestion(index: number) {
    if (
      this.examSubmitted &&
      this.selectedAnswer[index] == this.questions[index].answer
    ) {
      return 'color:green';
    } else if (
      this.examSubmitted &&
      this.selectedAnswer[index] != this.questions[index].answer
    ) {
      return 'color:red';
    }
    return '';
  }

  examScore(correctCount: number) {
    if (correctCount > 5) {
      this.score = 'Pass';
    } else {
      this.score = 'Fail';
    }
  }

  scoreMarker(score: string) {
    if (score == 'Pass') {
      return 'color: green';
    } else {
      return 'color:red';
    }
  }
}
