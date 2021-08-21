import { Component, OnInit } from '@angular/core';
import { Qoute } from '../qoute';

@Component({
  selector: 'app-qoute-list',
  templateUrl: './qoute-list.component.html',
  styleUrls: ['./qoute-list.component.css']
})
export class QouteListComponent  {
  qoutes :Qoute[] = [
    {id:1,name:'Seek and you will find'},
    {id:2,name:'where there is a will,there is a way'},
    {id:3,name:'Dont cry over split milk'}
  ]
      
  
  
 

}
