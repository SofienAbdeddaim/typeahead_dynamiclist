import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forAstudent';
  selectedData = [];

  onFetchData(value) {
    console.log(value);
    this.selectedData.push(value)
  }
}
