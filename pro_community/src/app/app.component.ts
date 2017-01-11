import { Component } from '@angular/core';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/** Nested Component **/
import { WeComponent } from 'app/we/we.component';

@NgModule({
  imports:      [BrowserModule ],
  declarations: [ Component, WeComponent ],  //<----here
  providers:    [],
  bootstrap:    [ Component ]
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Comunidade de Programação'

}
