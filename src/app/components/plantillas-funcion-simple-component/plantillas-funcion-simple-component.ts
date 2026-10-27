import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServicePlantillas } from '../../services/service.plantillas';
import { Plantilla } from '../../models/plantilla';


@Component({
  selector: 'app-plantillas-funcion-simple-component',
  standalone: false,
  styleUrl: './plantillas-funcion-simple-component.css',
  templateUrl: './plantillas-funcion-simple-component.html',
})
export class PlantillasFuncionSimpleComponent implements OnInit{
  public funciones!: Array<string>;
  public plantilla!: Array<Plantilla>;
  public color: string = 'white';
  @ViewChild("selectfuncion") selectfuncion! : ElementRef;
  constructor(
    private _cdr : ChangeDetectorRef,
    private _service : ServicePlantillas
  ){
  }

  async obtenerPlantilla(): Promise<void> {
    let funcionElegida = this.selectfuncion.nativeElement.value;
    this.plantilla= await this._service.getPlantilla(funcionElegida);
    this._cdr.detectChanges();
    console.log(this.plantilla);
  }
  async ngOnInit(): Promise<void> {
    this.funciones= await this._service.getFunciones();
    this._cdr.detectChanges()
  }
}
