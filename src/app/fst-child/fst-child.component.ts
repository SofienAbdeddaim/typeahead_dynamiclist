import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import 'rxjs/add/operator/map';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Http} from "@angular/http";
const jsonFile = {
  "1": {
    "name":"sofien",
      "lastName":"abdeddaim",
      "email":"sofien.abdeddaim@gmail.com"
  },"2": {
    "name":"ahmed",
      "lastName":"abdeddaim",
      "email":"sofien.abdeddaim@gmail.com"
  },"3": {
    "name":"Mohammed",
      "lastName":"abdeddaim",
      "email":"sofien.abdeddaim@gmail.com"
  },"4": {
    "name":"Ali",
      "lastName":"abdeddaim",
      "email":"sofien.abdeddaim@gmail.com"
  },"5": {
    "name":"Robert",
      "lastName":"abdeddaim",
      "email":"sofien.abdeddaim@gmail.com"
  },"6": {
    "name":"Gabrielle",
      "lastName":"abdeddaim",
      "email":"sofien.abdeddaim@gmail.com"
  }
};
const states = [];

@Component({
  selector: 'app-fst-child',
  templateUrl: './fst-child.component.html',
  styleUrls: ['./fst-child.component.css']
})
export class FstChildComponent implements OnInit{

  @Output() dataAdded: EventEmitter<string> = new EventEmitter<string>();
  constructor(private http: Http) {
  }

  ngOnInit() {
    console.log(jsonFile);

    for (var key in jsonFile) {
      if (jsonFile.hasOwnProperty(key)) {
        states.push(jsonFile[key].name + ' ' + jsonFile[key].lastName + ' | ' + jsonFile[key].email);
      }
    }
    console.log(states);
  }


  public model: any;

  formatter = (result: string) => result.toUpperCase();

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term === '' ? []
        : states.filter(v => v.toLowerCase().indexOf(term.toLowerCase())> -1).slice(0, 10))
    );

  addToList(value) {
    console.log(value);
    this.model = '';
    this.dataAdded.emit(value);
  }
}
