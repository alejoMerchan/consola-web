import { Component } from '@angular/core';
import {SolicitudService} from './solicitud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[SolicitudService]
})
export class AppComponent {
  title = 'Solicitudes Vida';
}
