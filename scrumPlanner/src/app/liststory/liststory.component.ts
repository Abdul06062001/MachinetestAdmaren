import { Component } from '@angular/core';
import { ScrumService } from '../scrum.service';

@Component({
  selector: 'app-liststory',
  templateUrl: './liststory.component.html',
  styleUrls: ['./liststory.component.css']
})
export class ListstoryComponent {
  constructor(private Storyservice:ScrumService){

  }
  
  stories:any;

   ngOnInit(){
    this.Storyservice.getStories().subscribe((data)=>{this.stories=data;
    // console.log(data)
    })

   }
}
