import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-snd-child',
  templateUrl: './snd-child.component.html',
  styleUrls: ['./snd-child.component.css']
})
export class SndChildComponent implements OnInit {

  @Input() data;
  constructor() { }

  ngOnInit() {
  }

  deletItem(index) {
    console.log(index);
    this.data.splice(index, 1);
  }

}
