import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ServicePersonas } from '../../services/service.personas';
import { Persona } from '../../models/persona';

@Component({
  selector: 'app-personas-api-component',
  standalone: false,
  styleUrl: './personas-api-component.css',
  templateUrl: './personas-api-component.html',
})
export class PersonasApiComponent implements OnInit{
  public personas!: Array<Persona>
  constructor(private _cdr: ChangeDetectorRef, 
    private _service: ServicePersonas ){
  }
  async ngOnInit(): Promise<void> {

    //LLamada por async await
    /* try {
      this.personas = await this._service.getPersonasAsync();
      this._cdr.detectChanges();
    } catch (error) {
      console.log(error)
    }*/
    
    
    //LLamada para promise
    /*this._service.getPersonasPromsa().then((response) =>{
      this.personas = response;
      this._cdr.detectChanges();
    }).catch((error: any) => {
        console.log(error)
    })*/


      //Llamada a http
    //si devuelve un observable ns subscribimos a su promise
    this._service.getPersonas().subscribe({
      next : (response) => {
        this.personas = response;
        this._cdr.detectChanges()
      }, error: (error) => {
        console.log(error)
      }
    })
  }
}
