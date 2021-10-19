import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<img src="./assets/welcome-poster-spectrum-brush-strokes-260nw-1146069941.jpg"
              width="100%" height="550px" alt="Welcome Image">`,  
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
