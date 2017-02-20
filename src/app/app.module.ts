import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ButtonsModule } from 'ng2-bootstrap/buttons';

import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { Test2Component } from './test2/test2.component';

import { SendService } from './send.service'

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    Test2Component,
        
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
