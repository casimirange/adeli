import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {CustomResponse} from "../../_interfaces/custom-response";
import {environment} from "../../../environments/environment";
import {catchError} from "rxjs/operators";
import {Seance} from "../../_model/seance";
import {Tontine} from "../../_model/tontine";
import {Discipline} from "../../_model/discipline";
import {Amande} from "../../_model/amande";
import {Pret} from "../../_model/pret";
import {Beneficiaire} from "../../_model/beneficiaire";
import {Projet} from "../../_model/projet";

@Injectable({
  providedIn: 'root'
})
export class SeanceService {

  constructor(private http: HttpClient) { }

  seances$ = (date: string, page: number, size: number) => <Observable<CustomResponse<Seance>>>
    this.http.get<CustomResponse<Seance>>(environment.seance + `?date=${date}&page=${page}&size=${size}`,)
      .pipe(catchError(this.handleError));

  createTontine(idSeance: number): Observable<any>{
    return this.http.post<any>(environment.tontine + `?seance=${idSeance}`, null)
  }

  createAmande(amande: Amande): Observable<any>{
    return this.http.post<any>(environment.amande, amande)
  }

  createPret(pret: Pret): Observable<any>{
    return this.http.post<any>(environment.pret, pret)
  }

  createBeneficiaire(benef: Beneficiaire): Observable<any>{
    return this.http.post<any>(environment.beneficiaire, benef)
  }

  updateBeneficiaire(benef: Beneficiaire, id: number): Observable<any>{
    return this.http.put<any>(environment.beneficiaire + `/${id}`, benef)
  }

  updateAmande(benef: Amande, id: number): Observable<any>{
    return this.http.put<any>(environment.amande + `/${id}`, benef)
  }

  updatePret(benef: Pret, id: number): Observable<any>{
    return this.http.put<any>(environment.pret + `/${id}`, benef)
  }

  rembourserPret(benef: Pret, id: number): Observable<any>{
    return this.http.put<any>(environment.pret + `/rembourser/${id}`, benef)
  }

  updateSanction(sanction: Discipline, id: number): Observable<any>{
    return this.http.put<any>(environment.discipline + `/${id}`, sanction)
  }

  updateProjet(sanction: Projet, id: number): Observable<any>{
    return this.http.put<any>(environment.projet + `/${id}`, sanction)
  }

  deleteBeneficiaire(id: number): Observable<any>{
    return this.http.delete<any>(environment.beneficiaire + `/${id}`)
  }

  deleteAmande(id: number): Observable<any>{
    return this.http.delete<any>(environment.amande + `/${id}`)
  }

  deletePret(id: number): Observable<any>{
    return this.http.delete<any>(environment.pret + `/${id}`)
  }

  deleteSanction(id: number): Observable<any>{
    return this.http.delete<any>(environment.discipline + `/${id}`)
  }

  deleteProjet(id: number): Observable<any>{
    return this.http.delete<any>(environment.projet + `/${id}`)
  }

  createDiscipline(sanction: Discipline): Observable<any>{
    return this.http.post<any>(environment.discipline , sanction)
  }

  addSeance$ = (seance: Seance) => <Observable<Seance>>
    this.http.post<Seance>(environment.seance, seance)
      .pipe(catchError(this.handleError));

  showSeance$ = (id: number) => <Observable<Seance>>
    this.http.get<Seance>(environment.seance+`/${id}`)
      .pipe(catchError(this.handleError));

  showCotisationBySeance$ = (id: number, page: number, size: number) => <Observable<CustomResponse<Tontine>>>
    this.http.get<CustomResponse<Tontine>>(environment.tontine+`/seance/${id}?page=${page}&size=${size}`)
      .pipe(catchError(this.handleError));

  showDisciplineBySeance$ = (id: number, page: number, size: number) => <Observable<CustomResponse<Discipline>>>
    this.http.get<CustomResponse<Discipline>>(environment.discipline+`/seance/${id}?page=${page}&size=${size}`)
      .pipe(catchError(this.handleError));

  showAmandeBySeance$ = (id: number, page: number, size: number) => <Observable<CustomResponse<Amande>>>
    this.http.get<CustomResponse<Amande>>(environment.amande+`/seance/${id}?page=${page}&size=${size}`)
      .pipe(catchError(this.handleError));

  showPretBySeance$ = (id: number, page: number, size: number) => <Observable<CustomResponse<Pret>>>
    this.http.get<CustomResponse<Pret>>(environment.pret+`/seance/${id}?page=${page}&size=${size}`)
      .pipe(catchError(this.handleError));

  showBenefBySeance$ = (id: number, page: number, size: number) => <Observable<CustomResponse<Beneficiaire>>>
    this.http.get<CustomResponse<Beneficiaire>>(environment.beneficiaire+`/seance/${id}?page=${page}&size=${size}`)
      .pipe(catchError(this.handleError));

  showProjetBySeance$ = (id: number, page: number, size: number) => <Observable<CustomResponse<Projet>>>
    this.http.get<CustomResponse<Projet>>(environment.projet+`/seance/${id}?page=${page}&size=${size}`)
      .pipe(catchError(this.handleError));

  saveCompteRenduSeance(seanceId: number, file: File): Observable<any>{
    const data: FormData = new FormData();
    data.append('file', file);
    const httpOptions = {
      responseType: 'arraybuffer' as 'json'
      // 'responseType'  : 'blob' as 'json'        //This also worked
    };
    return this.http.post<any>(environment.seance + `/compterendu/${seanceId}`, data, httpOptions)
  }

  terminerSéance(seanceId: number): Observable<any>{
    // const data: FormData = new FormData();
    // data.append('file', file);
    const httpOptions = {
      responseType: 'arraybuffer' as 'json'
      // 'responseType'  : 'blob' as 'json'        //This also worked
    };
    return this.http.put<any>(environment.seance + `/end/${seanceId}`,null, httpOptions)
  }

  getComteRendu(seanceId: number, type: string, docType: string): Observable<any>{
    const httpOptions = {
      responseType: 'arraybuffer' as 'json'
      // 'responseType'  : 'blob' as 'json'        //This also worked
    };
    return this.http.get<any>(environment.seance + `/file/${seanceId}/downloadFile?type=${type}&docType=${docType}`, httpOptions)
  }

  handleError(error: HttpErrorResponse): Observable<never>{
    return throwError(`Une erreur est survenue: ${error.error.message }` )
  }
}
