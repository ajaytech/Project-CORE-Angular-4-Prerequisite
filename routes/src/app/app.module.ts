import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { ElephantComponent } from './elephant/elephant.component';
import { DeerComponent } from './deer/deer.component';
import { LeopardComponent } from './leopard/leopard.component';
import { GiraffeComponent } from './giraffe/giraffe.component';


@NgModule({
  declarations: [
    AppComponent,
    ElephantComponent,
    DeerComponent,
    LeopardComponent,
    GiraffeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
