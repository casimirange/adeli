import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {CustomResponse} from "../../_interfaces/custom-response";
import {environment} from "../../../environments/environment";
import {catchError} from "rxjs/operators";
import {Projet} from "../../_model/projet";
import {Pret} from "../../_model/pret";

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  constructor(private http: HttpClient) { }

  projets$ = (type?: string, date?: string, page?: number, size?: number) => <Observable<CustomResponse<Projet>>>
    this.http.get<CustomResponse<Projet>>(environment.projet + `?page=${page}&size=${size}&type=${type}&date=${date}`,)
      .pipe(catchError(this.handleError));

  soldeProjet$ = () => <Observable<number>>
    this.http.get<number>(environment.projet + `/solde`,)
      .pipe(catchError(this.handleError));

  addProjet$ = (projet: Projet) => <Observable<Projet>>
    this.http.post<Projet>(environment.projet, projet)
      .pipe(catchError(this.handleError));

  handleError(error: HttpErrorResponse): Observable<never>{
    return throwError(`Une erreur est survenue: ${error.error.message.toString().bold()}` )
  }
}
