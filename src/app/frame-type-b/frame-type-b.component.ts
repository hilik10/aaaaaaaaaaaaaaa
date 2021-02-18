import { Component, OnInit } from '@angular/core';
import { YourChoiceService } from '../your-choice.service';

@Component({
  selector: 'app-frame-type-b',
  templateUrl: './frame-type-b.component.html',
  styleUrls: ['./frame-type-b.component.css']
})
export class FrameTypeBComponent implements OnInit {

  constructor(private yourChoiceService:YourChoiceService) { }

  ngOnInit(): void {
  }
  click(){
    this.yourChoiceService .frame="צהוב";
  console.log (2)
    }
}
