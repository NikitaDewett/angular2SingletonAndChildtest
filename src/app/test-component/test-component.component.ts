import { Component, OnInit } from '@angular/core';
import { SendService } from '../send.service'

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {
  public Parentname:string;

  constructor(public send:SendService) { 
    this.Parentname = 'User';
    }

  ngOnInit() {
  }

showName = function(){
  
this.send.sendData(this.Parentname);
console.log(this.send.data);
}

}
