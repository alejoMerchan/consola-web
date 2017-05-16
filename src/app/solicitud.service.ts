import { Injectable } from '@angular/core';
import { Solicitud } from './solicitud';

@Injectable()
export class SolicitudService {

  constructor() { }

  getAll():Solicitud[] {
    return [
    {numero:'0001', estado:'EXITOSA'},
    {numero:'0002', estado:'FALLIDA'},
    {numero:'0003', estado:'EXITOSA'},
  ];
  }

}
