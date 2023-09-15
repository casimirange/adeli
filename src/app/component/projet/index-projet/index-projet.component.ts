import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Mangwa} from "../../../_model/mangwa";
import {BehaviorSubject, Observable, of} from "rxjs";
import {AppState} from "../../../_interfaces/app-state";
import {CustomResponse} from "../../../_interfaces/custom-response";
import {IUser} from "../../../_model/user";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NotifsService} from "../../../_services/notifications/notifs.service";
import {UsersService} from "../../../_services/users/users.service";
import {MangwaService} from "../../../_services/mangwa/mangwa.service";
import {catchError, map, startWith} from "rxjs/operators";
import {DataState} from "../../../_enum/data.state.enum";
import {ProjetService} from "../../../_services/projet/projet.service";
import {Projet} from "../../../_model/projet";

@Component({
  selector: 'app-index-projet',
  templateUrl: './index-projet.component.html',
  styleUrls: ['./index-projet.component.css']
})
export class IndexProjetComponent implements OnInit {

  @ViewChild('mymodal', { static: false }) viewMe?: ElementRef<HTMLElement>;
  mangwaForm: FormGroup ;
  projet: Projet = new Projet();

  appState$: Observable<AppState<CustomResponse<Projet>>>;
  soldeState$: Observable<AppState<number>>;
  readonly DataState = DataState;
  private dataSubjects = new BehaviorSubject<CustomResponse<Projet>>(null);
  users: CustomResponse<IUser>;
  private isLoading = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoading.asObservable();
  modalTitle = 'Enregistrer un nouveau carton'

  nc: number;
  page: number = 1;
  totalPages: number;
  totalElements: number;
  size: number = 20;
  roleUser = localStorage.getItem('userAccount').toString()
  date = '';
  statusFilter = ''
  constructor(private fb: FormBuilder, private modalService: NgbModal, private notifService: NotifsService,
              private userService: UsersService, private projetService: ProjetService) {

  }

  ngOnInit(): void {
    this.formProjet();
    this.getProjets();
    this.getSoldeProjets();
    this.getUsers();
  }

  //formulaire de création
  formProjet(){
    this.mangwaForm = this.fb.group({
      date: ['', [Validators.required]],
      user: ['', [Validators.required]],
      motif: ['', [Validators.required, Validators.minLength(10)]],
      montant: ['', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.min(1)]],
    });
  }

  getProjets(){
    this.appState$ = this.projetService.projets$(this.statusFilter,this.date,  this.page - 1, this.size)
      .pipe(
        map(response => {
          // console.log(response)
          this.dataSubjects.next(response)
          this.notifService.onSuccess('chargement des projets')
          return {dataState: DataState.LOADED_STATE, appData: response}
        }),
        startWith({dataState: DataState.LOADING_STATE, appData: null}),
        catchError((error: string) => {
          return of({dataState: DataState.ERROR_STATE, error: error})
        })
      )
  }

  getSoldeProjets(){
    this.soldeState$ = this.projetService.soldeProjet$()
      .pipe(
        map(response => {
          // console.log(response)
          return {dataState: DataState.LOADED_STATE, appData: response}
        }),
        startWith({dataState: DataState.LOADING_STATE, appData: null}),
        catchError((error: string) => {
          return of({dataState: DataState.ERROR_STATE, error: error})
        })
      )
  }

  getUsers(){
    this.userService.getUserss().subscribe(
      resp => {
        this.users = resp
      }
    )
  }

  //save carton
  saveProjet(){
    this.isLoading.next(true)
    this.projet = this.mangwaForm.value
    this.projet.transaction = "DEPOT"
    this.appState$ = this.projetService.addProjet$(this.projet)
      .pipe(
        map((response ) => {
          this.dataSubjects.next(
            {...this.dataSubjects.value , content: [response, ...this.dataSubjects.value.content]}
          )
          this.annuler()
          this.isLoading.next(false)
          this.notifService.onSuccess("nouvelle transaction effectuée!")
          return {dataState: DataState.LOADED_STATE, appData: this.dataSubjects.value}
        }),
        startWith({dataState: DataState.LOADED_STATE, appData: this.dataSubjects.value}),
        catchError((error: string) => {
          this.isLoading.next(false)
          return of({dataState: DataState.ERROR_STATE, error: error})
        })
      )
  }

  //save carton
  removeMoneyProjet(){
    this.isLoading.next(true)
    this.projet = this.mangwaForm.value
    this.projet.transaction = "DEPOT"
    this.appState$ = this.projetService.addProjet$(this.projet)
      .pipe(
        map((response ) => {
          this.dataSubjects.next(
            {...this.dataSubjects.value , content: [response, ...this.dataSubjects.value.content]}
          )
          this.annuler()
          this.isLoading.next(false)
          this.notifService.onSuccess("nouvelle transaction effectuée!")
          return {dataState: DataState.LOADED_STATE, appData: this.dataSubjects.value}
        }),
        startWith({dataState: DataState.LOADED_STATE, appData: this.dataSubjects.value}),
        catchError((error: string) => {
          this.isLoading.next(false)
          return of({dataState: DataState.ERROR_STATE, error: error})
        })
      )
  }


  annuler() {
    this.formProjet();
    this.mangwaForm.reset()
    this.modalService.dismissAll()
  }

  open(content: any){
    const modal = true;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg'});
  }

  // updateCartonModal(mymodal: TemplateRef<any>, carton: Carton) {
  // this.modalService.open(mymodal, {ariaLabelledBy: 'modal-basic-title', size: 'lg'});
  // this.carton = carton
  // // this.sn = carton.serialNumber
  // console.log('magasin', this.stores.find(store => store.internalReference === carton.idStoreHouseStockage))
  // this.storeHouse = this.storeHouses.find(store => store.internalReference === carton.idStoreHouseStockage)
  // this.entrepot = this.storeHouse.name
  // this.magasin = this.stores.find(store => store.internalReference === this.storeHouse.idStore).localization
  // this.modalTitle = 'Modifier carton'
  // }

  updateCarton() {
    // this.isLoading.next(true);
    // this.store = this.stores.find(store => store.localization === this.pretForm.controls['idStore'].value)
    // this.storeHouse = this.storeHouses.find(sth => sth.idStore == this.store.internalReference && sth.type === 'stockage')

    // this.carton.idStoreKeeper = parseInt(localStorage.getItem('uid').toString())
    // this.carton.idStoreHouse = this.storeHouse.internalReference
    // this.carton.serialNumber = this.pretForm.controls['serialNumber'].value
    // const updateCarton = {
    //   "idStoreKeeper" : 0,
    //   "serialNumber" : '',
    //   "idStoreHouse" : 0
    // }
    // updateCarton.idStoreKeeper = parseInt(localStorage.getItem('uid').toString())
    // updateCarton.idStoreHouse = this.pretForm.controls['idStoreHouse'].value
    // updateCarton.serialNumber = this.pretForm.controls['serialNumber'].value

    // this.cartonService.updateCarton(updateCarton, this.carton.internalReference).subscribe(
    //   resp => {
    //     this.isLoading.next(false);
    //     // on recherche l'index du client dont on veut faire la modification dans liste des clients
    //     const index = this.cartons.findIndex(carton => carton.internalReference === resp.internalReference);
    //     this.cartons[ index ] = resp;
    //     this.notifService.onSuccess("carton modifié avec succès!")
    //     this.annuler()
    //   },
    //   error => {
    //     this.isLoading.next(false);
    //   }
    // )
  }

  pageChange(event: number){
    this.page = event
    this.getProjets()
  }

}
