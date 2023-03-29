import { Component } from '@angular/core';
import { ScrumService } from '../scrum.service';

@Component({
  selector: 'app-sprint-calculator',
  templateUrl: './sprint-calculator.component.html',
  styleUrls: ['./sprint-calculator.component.css']
})
export class SprintCalculatorComponent {

constructor(private sprintService:ScrumService){

}
stoty:any

  submit(data:any){
  //  console.log(data)
  this.sprintService.getSprint(data).subscribe((res)=>this.stoty=res)
  }

  clearStories(id:any){
      this.sprintService.dltStories(id).subscribe((ids)=>ids)
  }
}
