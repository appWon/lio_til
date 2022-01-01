import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './_Routes/home/home.module';
import { BaseComponentComponent } from './_components/base-component/base-component.component';

@NgModule({
  declarations: [AppComponent, BaseComponentComponent],
  imports: [BrowserModule, AppRoutingModule, HomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
