import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ScrumService } from '../scrum.service';

@Component({
  selector: 'app-addstory',
  templateUrl: './addstory.component.html',
  styleUrls: ['./addstory.component.css']
})
export class AddstoryComponent {

  constructor(private myservice:ScrumService, private route:Router){}

  submitValue(data:any){
    // console.log(data)
    this.myservice.postStories(data).subscribe((res)=>{console.log(res);
    alert("Sucessfully Added");
    this.route.navigate(['/listPage'])
  }) 
  }

}
