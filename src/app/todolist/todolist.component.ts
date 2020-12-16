import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  @Input()
  task:string
  works = ['Coffee','Breakfast'];
  work: string;
  constructor() { }

  ngOnInit(): void {
  }

  addTask() {
    this.works.push(this.work);
    this.work="";
  }

  deleteTask() {
    this.works.splice(this.works.indexOf(this.work),1)
  }



}
