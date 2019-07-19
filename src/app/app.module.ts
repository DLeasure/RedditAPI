import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ResultComponent } from './result/result.component';
import { RequestService } from './request.service';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule
  ],
  providers: [RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
