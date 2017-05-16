import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SolicitudListComponent } from './solicitud-list/solicitud-list.component';
import { SolicitudService } from './solicitud.service';

@NgModule({
  declarations: [
    AppComponent,
    SolicitudListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SolicitudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
