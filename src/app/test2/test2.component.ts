import { Component, OnInit, Input } from '@angular/core';
import { SendService } from '../send.service'

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css'],
  
})
export class Test2Component implements OnInit {
  
  @Input()
  public name:string;

  constructor(public sendService:SendService) {
    
   }

  ngOnInit() {
    
  }

  getName = function(){
    this.name = this.sendService.getData();
    console.log(this.name);
  }

}
