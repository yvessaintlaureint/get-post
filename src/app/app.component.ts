import { Component, OnInit } from '@angular/core';
import { tutorial } from './model/tutorial-model';
import { TutorialService } from './service/tutorial.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'get-post';
  tutorials: tutorial[] =[];

  constructor(
    private tutorialService: TutorialService
  ) {}

  ngOnInit(): void {
    this.getDataTutorial()
  }

  // Get all data: component
  getDataTutorial(){
    this.tutorialService.getAll().subscribe((item) =>{
      this.tutorials = item
      console.log('success data', item)
    });
  }

  // Get data by ID: component
  getDataTutorialId(id: any){
    this.tutorialService.get(id).subscribe((res) =>{
      console.log('success get data', res)
    })
  }

  // Post data: component
  postDataTutorial(title: string, desc: string){
    this.tutorialService.post(title, desc).subscribe((item) => {
      console.log('success post data', item)
    })
  }

  // Delete data: component
  deleteDataTutorial(id:any){
    this.tutorialService.delete(id).subscribe(() =>{
      console.log('success delete data')
    })
  }
}
