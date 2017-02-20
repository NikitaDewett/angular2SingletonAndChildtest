import { Injectable } from '@angular/core';

@Injectable()
export class SendService {
  public data:string;

  constructor() { }

  sendData(param){
    this.data = param;
    
  }
  getData(){
    return this.data;
  }

}
