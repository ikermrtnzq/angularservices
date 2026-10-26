import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class ServicePersonas{

    //recibimos el objeto httpclient
    constructor(private _http:HttpClient){}

    getPersonas() : Observable<any> {
        let url= "https://servicioapipersonasmvcpgs.azurewebsites.net/api/personas"
        return this._http.get(url)
    }
}