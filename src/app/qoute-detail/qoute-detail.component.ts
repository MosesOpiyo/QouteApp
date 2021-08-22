import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Qoute } from '../qoute';

@Component({
  selector: 'app-qoute-detail',
  templateUrl: './qoute-detail.component.html',
  styleUrls: ['./qoute-detail.component.css']
})
export class QouteDetailComponent implements OnInit {
  qoutes :Qoute[] = [
    new Qoute (1,'Seek and you will find','make the effort and you will see results'),
    new Qoute(2,'where there is a will,there is a way','nothing is impossible with the right effort'),
     new Qoute(3,'Dont cry over split milk','theres no need crying over past mistakes')
   ]

  @Input () qoute:Qoute
  @Output () isUseless = new EventEmitter<boolean>();

  qouteUseless(useless:boolean){
    this.isUseless.emit(useless);
  }
  upVote(index){
    this.qoutes[index].upVote +=1;
  }
  downVote(index){
    this.qoutes[index].downVote -=1;
  }
  

  constructor() { }

  ngOnInit() {
  }

}
