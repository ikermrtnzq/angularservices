import { HttpClient } from "@angular/common/http";
import { Injectable, Type } from "@angular/core";
import { first, firstValueFrom, Observable } from "rxjs";
import { Persona } from "../models/persona";
import { Global } from "../global";
import { environment } from "../../environments/environment.development";

@Injectable()
export class ServicePersonas{

    //recibimos el objeto httpclient
    constructor(private _http:HttpClient){}

    getPersonas() : Observable<any> {
        let url= environment.urlApiPersonas;
        return this._http.get(url)
    }

    getPersonasPromsa(): Promise<any>{
        let url= "https://servicioapipersonasmvcpgs.azurewebsites.net/api/personas"
        let promise = new Promise((resolve) =>{
            this._http.get(url).subscribe((response) => {
                resolve(response);
            })
        })
        return promise;
    }
    async getPersonasAsync(): Promise<Persona[]>{
        let url= "https://servicioapipersonasmvcpgs.azurewebsites.net/api/personas"
        return firstValueFrom(this._http.get<Persona[]>(url));
    }
}