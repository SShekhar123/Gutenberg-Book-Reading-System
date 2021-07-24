import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'gutenberg';
  appshow = true;
  
  constructor() {
    if(String(window.location.href).indexOf('fiction') >= 0)
      this.appshow = false;
  }

  ngOnInit() {
  }

  show(){
    this.appshow = false;
  }

}
