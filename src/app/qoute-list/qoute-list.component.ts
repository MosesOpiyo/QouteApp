import { Component, OnInit } from '@angular/core';
import { Qoute } from '../qoute';

@Component({
  selector: 'app-qoute-list',
  templateUrl: './qoute-list.component.html',
  styleUrls: ['./qoute-list.component.css']
})
export class QouteListComponent  {
  qoutes :Qoute[] = [
   new Qoute (1,'Seek and you will find','make the effort and you will see results'),
   new Qoute(2,'where there is a will,there is a way','nothing is impossible with the right effort'),
    new Qoute(3,'Dont cry over split milk','theres no need crying over past mistakes')
  ]
      
  
  
 

}
