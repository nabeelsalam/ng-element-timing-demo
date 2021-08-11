import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  entry = {
    identifier: '',
    startTime: 0
  };

  constructor() {}

  ngOnInit() {
    this.entry.identifier = 'asd';
    const observer = new PerformanceObserver(list => {
      list.getEntries().forEach((entry: any) => {
        console.log(entry.identifier, entry.startTime);
        setTimeout(() => {
          this.entry = entry;
        }, 10);
      });
    });
    observer.observe({ entryTypes: ['element'] });
  }
}
