import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {TestComponent} from './component/test.component';
import {MainComponent} from './component/main.component';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import {NgxExtendedPdfViewerModule} from 'ngx-extended-pdf-viewer';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    MainComponent
  ],
  imports: [
    BrowserModule, NgxExtendedPdfViewerModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
