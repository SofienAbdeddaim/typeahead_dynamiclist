import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FstChildComponent } from './fst-child/fst-child.component';
import { SndChildComponent } from './snd-child/snd-child.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    FstChildComponent,
    SndChildComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, NgbModule, HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
