import { Component, OnInit } from '@angular/core';
import { YourChoiceService } from '../your-choice.service';

@Component({
  selector: 'app-lens-number',
  templateUrl: './lens-number.component.html',
  styleUrls: ['./lens-number.component.css']
})
export class LensNumberComponent implements OnInit {
a:any ="";
b:any ="";
  constructor(private yourChoiceService:YourChoiceService) { }

  ngOnInit(): void {
    this.ab()
  }
ab(){
  this.a = this.yourChoiceService.frame
  this.b = this.yourChoiceService .LensType
}
}
