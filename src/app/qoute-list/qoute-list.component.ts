import { Component, OnInit } from '@angular/core';
import { Qoute } from '../qoute';

@Component({
  selector: 'app-qoute-list',
  templateUrl: './qoute-list.component.html',
  styleUrls: ['./qoute-list.component.css']
})
export class QouteListComponent implements OnInit {
  qoutes :Qoute[] = [
   new Qoute (1,'Seek and you will find','make the effort and you will see results'),
   new Qoute(2,'where there is a will,there is a way','nothing is impossible with the right effort'),
    new Qoute(3,'Dont cry over split milk','theres no need crying over past mistakes')
  ]
  toggleDetails(index) {
    this.qoutes[index].showDescription = !this.qoutes[index].showDescription;

  }
  uselessQoute(isUseless,index){
    if(isUseless){
      this.qoutes.splice(index,1);
    }
  }
  addNewQoute(qoute){
    let qouteLength = this.qoutes.length;
    qoute.id = qouteLength+1;
    this.qoutes.push(qoute)
  }
  upVote(index){
    this.qoutes[index].upVote +=1;
  }
  downVote(index){
    this.qoutes[index].downVote +=1;
  }
  
  
  

  constructor() {}

  ngOnInit () {

  }
      
  
  
 

}
