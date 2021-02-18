import { Component, OnInit } from '@angular/core';
import { YourChoiceService } from '../your-choice.service';

@Component({
  selector: 'app-frame-type-c',
  templateUrl: './frame-type-c.component.html',
  styleUrls: ['./frame-type-c.component.css']
})
export class FrameTypeCComponent implements OnInit {

  constructor(private yourChoiceService:YourChoiceService) { }

  ngOnInit(): void {
  }
  click(){
    this.yourChoiceService .frame="צהוב";
  console.log (3)
    }
}
