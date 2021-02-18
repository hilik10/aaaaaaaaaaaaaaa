import { Component, OnInit } from '@angular/core';
import { YourChoiceService } from '../your-choice.service';

type NewType = ";";

@Component({
  selector: 'app-frame-type-a',
  templateUrl: './frame-type-a.component.html',
  styleUrls: ['./frame-type-a.component.css']
})
export class FrameTypeAComponent implements OnInit {
a:any="";
  constructor(private yourChoiceService:YourChoiceService) { }

  ngOnInit(): void {
   
  }
  click(){
  this.yourChoiceService .frame="ירוק";
this.a =this.yourChoiceService .frame
  }
}
