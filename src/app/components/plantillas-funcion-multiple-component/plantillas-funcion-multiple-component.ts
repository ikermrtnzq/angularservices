import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServicePlantillas } from '../../services/service.plantillas';
import { Plantilla } from '../../models/plantilla';


@Component({
  selector: 'app-plantillas-funcion-multiple-component',
  standalone: false,
  styleUrl: './plantillas-funcion-multiple-component.css',
  templateUrl: './plantillas-funcion-multiple-component.html',
})
export class PlantillasFuncionMultipleComponent implements OnInit{
  public funciones!: Array<string>;
  public plantilla!: Array<Plantilla>;
  public color: string = 'white';
  @ViewChild("selectfunciones") selectfunciones! : ElementRef;
  constructor(
    private _cdr : ChangeDetectorRef,
    private _service : ServicePlantillas
  ){
  }

  async obtenerPlantilla(): Promise<void> {
    let aux = [];
    for (let funcion of this.selectfunciones.nativeElement.options) {
      if (funcion.selected == true) {
        aux.push(funcion.value)
      }
    }

    this.plantilla= await this._service.getPlantillaFunciones(aux);
    this._cdr.detectChanges();
    console.log(this.plantilla);
  }
  async ngOnInit(): Promise<void> {
    this.funciones= await this._service.getFunciones();
    this._cdr.detectChanges()
  }
}
