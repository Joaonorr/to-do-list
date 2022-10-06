import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  //value : number = 0;

 @Input() value : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  increment() {
    this.value++;
  }

  decrement() {
    this.value--;
  }
  
}
