import { Injectable } from "@angular/core";
import { Comic } from "../models/comic";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment.development";
import { firstValueFrom } from "rxjs";
import { Plantilla } from "../models/plantilla";
@Injectable()
export class ServicePlantillas{
    constructor(private _http: HttpClient){}

    async getFunciones(): Promise<string[]> {
        let url = environment.urlApiFunciones;
        let endpoint = "api/Plantilla/Funciones";
        return firstValueFrom(this._http.get<string[]>(url+endpoint))
    }

    async getPlantilla(funcionElegida: any) : Promise<Plantilla[]>{
        let url = environment.urlApiFunciones;
        let endpoint = "api/Plantilla/PlantillaFuncion/" + funcionElegida;
        return firstValueFrom(this._http.get<Plantilla[]>(url+endpoint))
    }
}
