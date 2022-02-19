import { Component, OnInit } from '@angular/core';
import { SlideInOutAnimation } from './animations';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  animations: [SlideInOutAnimation]
})
export class SearchComponent implements OnInit {
  
  animationState = 'out';
  constructor() { }

  ngOnInit(): void {
  }

  toggle(name: string){
      this.animationState = this.animationState === 'out' ? 'in' : 'out';
      console.log(this.animationState);
  }

}
