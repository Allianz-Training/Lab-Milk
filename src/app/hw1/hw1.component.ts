import { NgIf } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hw1',
  templateUrl:'./hw1.component.html',
  styleUrls: ['./hw1.component.css']
})

export class Hw1Component implements OnInit {
  @Input()
  task: string;
  tasks = [];
  taskk:string;
  description: string;
  descriptions = [];
  des: string;

  constructor() { }
  
  ngOnInit(): void {
  }

  addTask() {
    this.tasks.push(this.task);
    this.task = "";
    this.descriptions.push(this.description);
    this.description ="";
  }

  deleteTask() {
    this.tasks.splice(this.tasks.indexOf(this.task),1)
  }

  showDescription() {
    alert(this.descriptions);
  }

}
