import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  fields = [1]
  constructor() { }

  ngOnInit() {
  }
  addfield() {
    this.fields.push(this.fields.length +1)
  }
  removeField() {
    this.fields.pop()
  }

}
