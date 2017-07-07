import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Solicitud } from './solicitud';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class SolicitudService {

  private baseUrl: string = 'http://localhost:9420/ramo/080';

  constructor(private http:Http) {

  }

  getAll():Observable<Solicitud[]> {
    let solicitudes$ = this.http
    .get(`${this.baseUrl}/getSolicitudesFallidas`,{headers:this.getHeaders()})
    .map(mapSolicitudes);
    return solicitudes$;
  }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept','application/json');
    return headers;
  }

}

function mapSolicitudes(response:Response): Solicitud[]{

  return response.json().map(toSolicitud)
}

function toSolicitud(r:any):Solicitud{

  console.log(r);
  let solicitud = <Solicitud>({
  estado:r.dsEstado,
  numero:r.numeroSolicitud,
  fecha:r.fechaTran,
  alcance:r.alcance
  });

  return solicitud;

}
