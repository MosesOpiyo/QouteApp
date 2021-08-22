import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Qoute } from '../qoute';

@Component({
  selector: 'app-qoute-detail',
  templateUrl: './qoute-detail.component.html',
  styleUrls: ['./qoute-detail.component.css']
})
export class QouteDetailComponent implements OnInit {
  @Input () qoute:Qoute
  @Output () isUseless = new EventEmitter<boolean>();

  qouteUseless(useless:boolean){
    this.isUseless.emit(useless);
  }

  constructor() { }

  ngOnInit() {
  }

}
