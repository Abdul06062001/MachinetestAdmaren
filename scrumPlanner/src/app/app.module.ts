import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddstoryComponent } from './addstory/addstory.component';
import { ListstoryComponent } from './liststory/liststory.component';
import { HttpClientModule } from '@angular/common/http';
import { SprintCalculatorComponent } from './sprint-calculator/sprint-calculator.component';
import { AutoSprintComponent } from './auto-sprint/auto-sprint.component';


@NgModule({
  declarations: [
    AppComponent,
    AddstoryComponent,
    ListstoryComponent,
    SprintCalculatorComponent,
    AutoSprintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
