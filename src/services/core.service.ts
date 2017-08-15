import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Suspect } from "../models/suspect.model";
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";
import { Mobile } from "../models/mobile.model";
import { ModeOperatoire } from "../models/mode-operatoire.model";
import { Enquete } from "../models/enquete.model";

@Injectable()
export class CoreService {

        constructor(private http: Http) { }

        getEnquete(): Observable<Enquete[]> {
                return this.http.get('./assets/data/enquete.json')
                        .map((response: Response) => response.json());
                        // .find((enquete: Enquete) => enquete.enqueteId === id);
        }

        getPersons(): Observable<Suspect[]> {
                return this.http.get('./assets/data/suspect.json')
                        .map((response: Response) => response.json());
        }

        getMobiles(): Observable<Mobile[]> {
                return this.http.get('./assets/data/mobile.json')
                .map((response: Response) => response.json());
        }

        getModeOperatoires(): Observable<ModeOperatoire[]> {
                return this.http.get('./assets/data/modeoperatoire.json')
                .map((response: Response) => response.json());
        }
}