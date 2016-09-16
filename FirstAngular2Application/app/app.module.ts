import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';


import {AppComponent} from "./components/app.component";
import {NameComponent} from "./components/name.component"
@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, NameComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }