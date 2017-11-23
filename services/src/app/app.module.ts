import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { AnimalEditService } from './animal-edit.service';


@NgModule({
  declarations: [
    AppComponent,
    AnimalListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AnimalEditService],
  bootstrap: [AppComponent]
})
export class AppModule { }
