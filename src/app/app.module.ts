import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyImageComponent } from './myImage.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, MyImageComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
