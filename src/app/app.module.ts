import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConnectionServiceModule } from 'ng-connection-service';
import { ConnectionCheckService } from './connection-check.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ConnectionServiceModule
  ],
  providers: [
    ConnectionCheckService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
