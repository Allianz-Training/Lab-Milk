import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input()
  title:String

  constructor() { }
  count = 0
  items = [1,2,3,4,5,6,7]
  ngOnInit(): void {
  }
  countNumber(){
    this.count += 1;
  }
}
