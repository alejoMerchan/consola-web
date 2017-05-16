import { Component, OnInit } from '@angular/core';
import { Solicitud } from '../solicitud';
import { SolicitudService } from '../solicitud.service';

@Component({
  selector: 'app-solicitud-list',
  template: `
    <ul>
      <li *ngFor="let solicitud of solicitudes">

        <a href="#" (click)="selectSolicitud(solicitud)">
          {{solicitud.numero}}
        </a>

      </li>
    </ul>

    <section *ngIf="selectedSolicitud">
      <h2>Solicitud seleccionada:  {{selectedSolicitud.numero}}</h2>
      <h3>Estado</h3>
      <p>
        {{selectedSolicitud.estado}}
      </p>
    </section>
  `,
  styleUrls: ['./solicitud-list.component.scss']
})
export class SolicitudListComponent implements OnInit {

  solicitudes:Solicitud[];
  selectedSolicitud:Solicitud;

  constructor(private solicitudService: SolicitudService) {

  }

  ngOnInit() {
    this.solicitudes = this.solicitudService.getAll();
  }

  selectSolicitud(solicitud){
    this.selectedSolicitud = solicitud;
  }

}
