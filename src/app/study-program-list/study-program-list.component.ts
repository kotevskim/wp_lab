import { Component, OnInit } from '@angular/core';
import { StudyProgramService} from '../study-program.service';
import {StudyProgram} from '../model/StudyProgram';

@Component({
  selector: 'app-study-program-list',
  templateUrl: './study-program-list.component.html',
  styleUrls: ['./study-program-list.component.css']
})
export class StudyProgramListComponent implements OnInit {

  private _studyPrograms: StudyProgram[];

  constructor(private _service: StudyProgramService) { }

  ngOnInit() {
    this._service.getStudyPrograms()
      .subscribe(studyPrograms => this._studyPrograms = studyPrograms);
  }

  delete(studyProgram: StudyProgram): void {
    const index: number = this._studyPrograms.indexOf(studyProgram);
    this._service.deleteStudyProgram(studyProgram.id)
      .subscribe(() => { this._studyPrograms.splice(index, 1); },
                 err => { alert(err.error); });
  }

}
