import { Component, OnInit } from '@angular/core';
import { YourChoiceService } from '../your-choice.service';

@Component({
  selector: 'app-lens-type',
  templateUrl: './lens-type.component.html',
  styleUrls: ['./lens-type.component.css']
})
export class LensTypeComponent implements OnInit {
a:any []= [];
  constructor(private yourChoiceService:YourChoiceService) { }

  ngOnInit(): void {
   
  }
  clickA(){
    this.yourChoiceService .LensType ="mm";
  }
  clickB(){
    this.yourChoiceService .LensType ="קרוב";
  }
  clickC(){
    this.yourChoiceService .LensType ="רחוק";
  }
 
}
