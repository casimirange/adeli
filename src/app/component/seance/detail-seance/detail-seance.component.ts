import {Component, OnDestroy, OnInit, TemplateRef} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BehaviorSubject, Observable, of} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ActivatedRoute, Router} from "@angular/router";
import {NotifsService} from "../../../_services/notifications/notifs.service";
import Swal from "sweetalert2";
import {SeanceService} from "../../../_services/seance/seance.service";
import {AppState} from "../../../_interfaces/app-state";
import {CustomResponse} from "../../../_interfaces/custom-response";
import {catchError, map, startWith} from "rxjs/operators";
import {DataState} from "../../../_enum/data.state.enum";
import {Seance} from "../../../_model/seance";
import {Tontine} from "../../../_model/tontine";
import {Discipline} from "../../../_model/discipline";
import {UsersService} from "../../../_services/users/users.service";
import {IUser} from "../../../_model/user";
import {Amande} from "../../../_model/amande";
import {Pret} from "../../../_model/pret";
import {PretsService} from "../../../_services/pret/prets.service";
import {TontineService} from "../../../_services/tontine/tontine.service";
import {MangwaService} from "../../../_services/mangwa/mangwa.service";
import {Beneficiaire} from "../../../_model/beneficiaire";
import {LoaderComponent} from "../../../preloader/loader/loader.component";
import {Location} from "@angular/common";
import {ProjetService} from "../../../_services/projet/projet.service";
import {Projet} from "../../../_model/projet";

@Component({
  selector: 'app-detail-seance',
  templateUrl: './detail-seance.component.html',
  styleUrls: ['./detail-seance.component.css']
})
export class DetailSeanceComponent implements OnInit, OnDestroy {

  roleUser = localStorage.getItem('userAccount').toString()
  appState$: Observable<AppState<Seance>>;
  projet$: Observable<AppState<CustomResponse<Projet>>>;
  cotisation$: Observable<AppState<CustomResponse<Tontine>>>;
  amande$: Observable<AppState<CustomResponse<Amande>>>;
  benef$: Observable<AppState<CustomResponse<Beneficiaire>>>;
  discipline$: Observable<AppState<CustomResponse<Discipline>>>;
  pret$: Observable<AppState<CustomResponse<Pret>>>;
  statutSeance: string | undefined
  dateSeance: Date | undefined
  readonly DataState = DataState;
  private dataSubjects = new BehaviorSubject<Seance>(null);
  private dataSubjectsSeanceCotisation = new BehaviorSubject<CustomResponse<Tontine>>(null);
  private dataSubjectsSeanceDiscipline = new BehaviorSubject<CustomResponse<Discipline>>(null);
  private dataSubjectsSeanceAmande = new BehaviorSubject<CustomResponse<Amande>>(null);
  private dataSubjectsSeancePret = new BehaviorSubject<CustomResponse<Pret>>(null);
  private dataSubjectsSeanceBenef = new BehaviorSubject<CustomResponse<Beneficiaire>>(null);
  private isLoading = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoading.asObservable();
  private isCotise = new BehaviorSubject<boolean>(false);
  isCotise$ = this.isCotise.asObservable();
  private IdParam: string;
  page: number = 1;
  totalPages: number;
  totalElements: number;
  size: number = 10;
  amandeForm: FormGroup;
  pretForm: FormGroup;
  montantPrete: number
  disciplineForm: FormGroup;
  benefForm: FormGroup;
  users: CustomResponse<IUser>;
  amande: Amande = new Amande();
  selectedAmande: Amande = new Amande();
  pret: Pret  = new Pret();
  selectedPret: Pret = new Pret();
  projet: Projet = new Projet();
  selectedProjet: Projet = new Projet();
  beneficiaire: Beneficiaire = new Beneficiaire();
  selectedBeneficiaire: Beneficiaire = new Beneficiaire();
  discipline: Discipline = new Discipline();
  selectedDiscipline: Discipline = new Discipline();
  soldeState$: Observable<AppState<number>>;
  soldeTontine$: Observable<AppState<number>>;
  soldeProjet$: Observable<AppState<number>>;
  sm: number | undefined;
  st: number | undefined;
  sp: number | undefined;
  user: string;
  userPret: string;
  userAmande: string;
  pay: any
  userSanction: string;
  userProjet: string;
  transactionProjet: string;
  sanction: string;
  titleBenef = 'Nouveau Bénéficiaire';
  titleAmande = 'Nouvelle Amande';
  titlePret = 'Nouveau Prêt';
  titleSanction = 'Nouvelle Sanction';
  titleProjet = 'Nouvelle Contribution';
  pretRembForm: FormGroup ;
  mangwaForm: FormGroup ;
  private loadingFile = new BehaviorSubject<boolean>(false);
  constructor(private activatedRoute: ActivatedRoute, private route: ActivatedRoute, private modalService: NgbModal,
              private notifService: NotifsService, private fb: FormBuilder, private _location: Location,
              private userService: UsersService, private pretService: PretsService, private tontineService: TontineService, private projetService: ProjetService, private mangwaService: MangwaService,
              private seanceService: SeanceService) {
    this.IdParam = this.route.snapshot.paramMap.get('id');
    this.formAmande()
    this.formPret()
    this.formBenef()
    this.formProjet()
    this.formMangwa()
    this.formDiscipline()
  }

  ngOnInit(): void {
    this.getSeanceInfos()
    this.getCotisationBySeance()
    this.getDisciplineBySeance()
    this.getBeneficiaireBySeance()
    this.getPretBySeance()
    this.getProjetBySeance()
    this.getAmandeBySeance()
    this.getUsers()
    this.getSoldeMangwas()
    this.getSoldeTontine()
    this.getSoldeProjet()
  }

  getUsers(){
    this.userService.getUserss().subscribe(
      resp => {
        this.users = resp
      }
    )
  }
  formMangwa(){
    this.pretRembForm = this.fb.group({
      montant: ['', [Validators.required, Validators.pattern('^\\d+(\\.\\d{1,2})?$'), Validators.min(1)]],
      type: ['', ],
    });
  }

  //formulaire de création
  formProjet(){
    this.mangwaForm = this.fb.group({
      transaction: ['', [Validators.required]],
      user: ['', [Validators.required]],
      motif: ['', [Validators.required, Validators.minLength(10)]],
      montant: ['', [Validators.required, Validators.pattern('^\\d+(\\.\\d{1,2})?$'), Validators.min(1)]],
    });
  }

  getSoldeMangwas(){
    this.soldeState$ = this.mangwaService.soldeMangwa$()
      .pipe(
        map(response => {
          this.sm = response
          return {dataState: DataState.LOADED_STATE, appData: response}
        }),
        startWith({dataState: DataState.LOADING_STATE, appData: null}),
        catchError((error: string) => {
          return of({dataState: DataState.ERROR_STATE, error: error})
        })
      )
  }

  getSoldeTontine(){
    this.soldeTontine$= this.tontineService.soldeTontine$()
      .pipe(
        map(response => {
          this.st = response
          return {dataState: DataState.LOADED_STATE, appData: response}
        }),
        startWith({dataState: DataState.LOADING_STATE, appData: null}),
        catchError((error: string) => {
          return of({dataState: DataState.ERROR_STATE, error: error})
        })
      )
  }

  getSoldeProjet(){
    this.soldeProjet$= this.projetService.soldeProjet$()
      .pipe(
        map(response => {
          this.sp = response
          return {dataState: DataState.LOADED_STATE, appData: response}
        }),
        startWith({dataState: DataState.LOADING_STATE, appData: null}),
        catchError((error: string) => {
          return of({dataState: DataState.ERROR_STATE, error: error})
        })
      )
  }

  formAmande(){
    this.amandeForm = this.fb.group({
      pay: ['', ],
      montant: ['', [Validators.required, Validators.pattern('^\d+(\.\d{1,2})?$'), Validators.min(1)]],
      motif: ['', [Validators.required, Validators.minLength(4)]],
      idUser: ['', [Validators.required]]
    });
  }

  formPret(){
    this.pretForm = this.fb.group({
      montant: ['', [Validators.required, Validators.pattern('^\d+(\.\d{1,2})?$'), Validators.min(1)]],
      idUser: ['', [Validators.required]]
    });
  }

  formBenef(){
    this.benefForm = this.fb.group({
      montant: ['', [Validators.required, Validators.pattern('^\d+(\.\d{1,2})?$'), Validators.min(1)]],
      idUser: ['', [Validators.required]]
    });
  }

  formDiscipline(){
    this.disciplineForm = this.fb.group({
      sanction: ['', [Validators.required, Validators.minLength(4)]],
      idUser: ['', [Validators.required]]
    });
  }

  getSeanceInfos(){
    this.appState$ = this.seanceService.showSeance$(parseInt(this.IdParam))
      .pipe(
        map(response => {
          // console.log(response)
          this.dataSubjects.next(response)
          this.statutSeance = response.status.name;
          this.dateSeance = response.date;
          return {dataState: DataState.LOADED_STATE, appData: response}
        }),
        startWith({dataState: DataState.LOADING_STATE, appData: null}),
        catchError((error: string) => {
          return of({dataState: DataState.ERROR_STATE, error: error})
        })
      )

    // this.activatedRoute.params.subscribe(params => {
    //   this.clientService.findClient(params['id']).subscribe(
    //     res => {
    //       this.client = res;
    //       console.log(res)
    //     }
    //   )
    // })
  }

  getCotisationBySeance(){
    this.cotisation$ = this.seanceService.showCotisationBySeance$(+this.IdParam, this.page - 1, this.size)
      .pipe(
        map(response => {
          this.dataSubjectsSeanceCotisation.next(response)
          return {dataState: DataState.LOADED_STATE, appData: response}
        }),
        startWith({dataState: DataState.LOADING_STATE, appData: null}),
        catchError((error: string) => {
          return of({dataState: DataState.ERROR_STATE, error: error})
        })
      )
  }

  getAmandeBySeance(){
    this.amande$ = this.seanceService.showAmandeBySeance$(+this.IdParam, this.page - 1, this.size)
      .pipe(
        map(response => {
          this.dataSubjectsSeanceAmande.next(response)
          return {dataState: DataState.LOADED_STATE, appData: response}
        }),
        startWith({dataState: DataState.LOADING_STATE, appData: null}),
        catchError((error: string) => {
          return of({dataState: DataState.ERROR_STATE, error: error})
        })
      )
  }

  getBeneficiaireBySeance(){
    this.benef$ = this.seanceService.showBenefBySeance$(+this.IdParam, this.page - 1, this.size)
      .pipe(
        map(response => {
          this.dataSubjectsSeanceBenef.next(response)
          return {dataState: DataState.LOADED_STATE, appData: response}
        }),
        startWith({dataState: DataState.LOADING_STATE, appData: null}),
        catchError((error: string) => {
          return of({dataState: DataState.ERROR_STATE, error: error})
        })
      )
  }

  getDisciplineBySeance(){
    this.discipline$ = this.seanceService.showDisciplineBySeance$(+this.IdParam, this.page - 1, this.size)
      .pipe(
        map(response => {
          // console.log('cotisations', response)
          this.dataSubjectsSeanceDiscipline.next(response)
          return {dataState: DataState.LOADED_STATE, appData: response}
        }),
        startWith({dataState: DataState.LOADING_STATE, appData: null}),
        catchError((error: string) => {
          return of({dataState: DataState.ERROR_STATE, error: error})
        })
      )
  }

  getPretBySeance(){
    // console.log("entée2")
    this.pret$ = this.seanceService.showPretBySeance$(+this.IdParam, this.page - 1, this.size)
      .pipe(
        map(response => {
          this.dataSubjectsSeancePret.next(response)
          return {dataState: DataState.LOADED_STATE, appData: response}
        }),
        startWith({dataState: DataState.LOADING_STATE, appData: null}),
        catchError((error: string) => {
          return of({dataState: DataState.ERROR_STATE, error: error})
        })
      )
  }

  getProjetBySeance(){
    // console.log("entée2")
    this.projet$ = this.seanceService.showProjetBySeance$(+this.IdParam, this.page - 1, this.size)
      .pipe(
        map(response => {
          // this.dataSubjectsSeancePret.next(response)
          return {dataState: DataState.LOADED_STATE, appData: response}
        }),
        startWith({dataState: DataState.LOADING_STATE, appData: null}),
        catchError((error: string) => {
          return of({dataState: DataState.ERROR_STATE, error: error})
        })
      )
  }

  pageChange(event: number){
    this.page = event
    this.cotisation$ = this.seanceService.showCotisationBySeance$(+this.IdParam, this.page - 1, this.size)
      .pipe(
        map(response => {
          this.dataSubjectsSeanceCotisation.next(response)
          return {dataState: DataState.LOADED_STATE, appData: response}
        }),
        startWith({dataState: DataState.LOADING_STATE, appData: null}),
        catchError((error: string) => {
          return of({dataState: DataState.ERROR_STATE, error: error})
        })
      )
  }

  pageChangeDiscipline(event: number){
    this.page = event
    this.discipline$ = this.seanceService.showDisciplineBySeance$(+this.IdParam, this.page - 1, this.size)
      .pipe(
        map(response => {
          this.dataSubjectsSeanceDiscipline.next(response)
          return {dataState: DataState.LOADED_STATE, appData: response}
        }),
        startWith({dataState: DataState.LOADING_STATE, appData: null}),
        catchError((error: string) => {
          return of({dataState: DataState.ERROR_STATE, error: error})
        })
      )
  }

  pageChangeAmande(event: number){
    this.page = event
    this.amande$ = this.seanceService.showAmandeBySeance$(+this.IdParam, this.page - 1, this.size)
      .pipe(
        map(response => {
          this.dataSubjectsSeanceAmande.next(response)
          return {dataState: DataState.LOADED_STATE, appData: response}
        }),
        startWith({dataState: DataState.LOADING_STATE, appData: null}),
        catchError((error: string) => {
          return of({dataState: DataState.ERROR_STATE, error: error})
        })
      )
  }

  pageChangePret(event: number){
    this.page = event
    this.pret$ = this.seanceService.showPretBySeance$(+this.IdParam, this.page - 1, this.size)
      .pipe(
        map(response => {
          this.dataSubjectsSeancePret.next(response)
          return {dataState: DataState.LOADED_STATE, appData: response}
        }),
        startWith({dataState: DataState.LOADING_STATE, appData: null}),
        catchError((error: string) => {
          return of({dataState: DataState.ERROR_STATE, error: error})
        })
      )
  }

  open(content: any){
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg'});
  }

  openUpdateBenef(content: any, benef: Beneficiaire){
    this.selectedBeneficiaire = benef
    this.user = this.selectedBeneficiaire.user.userId
    this.titleBenef = 'Modifier Bénéficiaire';
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg'});
  }

  openUpdateAmande(content: any, amande: Amande){
    this.selectedAmande = amande
    this.userAmande = this.selectedAmande.user.userId
    this.pay = this.selectedAmande.typeTransaction.name == 'DEPOT' ? true : ""
    this.titleAmande = 'Modifier Amande';
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg'});
  }

  openUpdatePret(content: any, pret: Pret){
    this.selectedPret = pret
    this.userPret = this.selectedPret.user.userId
    this.titlePret = 'Modifier Prêt';
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg'});
  }

  openRembourserPret(content: any, pret: Pret){
    this.selectedPret = pret
    this.titlePret = 'Rembourser Prêt';
    this.montantPrete = pret.montant_prete
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg'});
  }

  openUpdateSanction(content: any, sanction: Discipline){
    this.selectedDiscipline = sanction
    this.userSanction = this.selectedDiscipline.user.userId
    this.sanction = this.selectedDiscipline.typeDiscipline.name
    this.titleSanction = 'Modifier Sanction';
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg'});
  }

  openUpdateProjet(content: any, sanction: Projet){
    this.selectedProjet = sanction
    this.userProjet = this.selectedProjet.user.userId
    this.transactionProjet = this.selectedProjet.typeTransaction.name
    this.titleProjet = 'Modifier Contribution';
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg'});
  }

  close(benef: Beneficiaire){
    Swal.fire({
      title: 'Supprimer',
      html: 'Vous êtes sur le point de supprimer le bénéficiaire, continuer? ' ,
      icon: 'warning',
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: 'oui',
      cancelButtonText: 'non',
      allowOutsideClick: false,
      focusConfirm: false,
      backdrop: `rgba(0, 0, 0, 0.4)`
    }).then((result) => {
      if (result.value) {
        this.deleteBenef(benef.id)
      }
    })
  }

  closeAmande(benef: Amande){
    Swal.fire({
      title: 'Supprimer',
      html: 'Vous êtes sur le point de supprimer l\'amande de '+benef.montant.toString().bold()+' €, continuer? ' ,
      icon: 'warning',
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: 'oui',
      cancelButtonText: 'non',
      allowOutsideClick: false,
      focusConfirm: false,
      backdrop: `rgba(0, 0, 0, 0.4)`
    }).then((result) => {
      if (result.value) {
        this.deleteAmande(benef.idAmande)
      }
    })
  }

  closeSanction(benef: Discipline){
    Swal.fire({
      title: 'Supprimer',
      html: 'Vous êtes sur le point de supprimer la sanction de '+benef.sanction+', continuer? ' ,
      icon: 'warning',
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: 'oui',
      cancelButtonText: 'non',
      allowOutsideClick: false,
      focusConfirm: false,
      backdrop: `rgba(0, 0, 0, 0.4)`
    }).then((result) => {
      if (result.value) {
        this.deleteSanction(benef.id)
      }
    })
  }

  closeProjet(benef: Projet){
    Swal.fire({
      title: 'Supprimer',
      html: 'Vous êtes sur le point de supprimer la contribution de '+benef.montant+', continuer? ' ,
      icon: 'warning',
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: 'oui',
      cancelButtonText: 'non',
      allowOutsideClick: false,
      focusConfirm: false,
      backdrop: `rgba(0, 0, 0, 0.4)`
    }).then((result) => {
      if (result.value) {
        this.deleteProjet(benef.id)
      }
    })
  }

  closePret(benef: Pret){
    Swal.fire({
      title: 'Supprimer',
      html: 'Vous êtes sur le point de supprimer le prêt de '+benef.montant_prete+' €, continuer? ' ,
      icon: 'warning',
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: 'oui',
      cancelButtonText: 'non',
      allowOutsideClick: false,
      focusConfirm: false,
      focusDeny: true,
      backdrop: `rgba(0, 0, 0, 0.4)`
    }).then((result) => {
      if (result.value) {
        this.deletePret(benef.idPret)
      }
    })
  }

  deleteBenef(id: number) {
    // console.log("youpi")
    this.seanceService.deleteBeneficiaire(id).subscribe(
      nex => {
        this.getCotisationBySeance()
        this.getBeneficiaireBySeance()
        this.getSoldeTontine()
        this.annuler()
      },
    );
  }

  deleteAmande(id: number) {
    this.seanceService.deleteAmande(id).subscribe(
      nex => {
        this.getSoldeMangwas()
        this.getAmandeBySeance()
        this.annuler()
      },
    );
  }

  deleteSanction(id: number) {
    this.seanceService.deleteSanction(id).subscribe(
      nex => {
        this.annuler()
        this.getDisciplineBySeance()
      },
    );
  }

  deleteProjet(id: number) {
    this.seanceService.deleteProjet(id).subscribe(
      nex => {
        this.annuler()
        this.getProjetBySeance()
        this.getSoldeProjet()
      },
    );
  }

  deletePret(id: number) {
    this.seanceService.deletePret(id).subscribe(
      nex => {
        // console.log("entée")
        this.getSoldeTontine()
        this.getPretBySeance()
        this.getCotisationBySeance()
        this.annuler()
      },
      error => {
        // console.error(error)
        this.notifService.onError(error.error.message)
      }
    );
  }

  createCotisation() {
    this.isCotise.next(true)
    this.seanceService.createTontine(+this.IdParam).subscribe(
      nex => {
        this.isCotise.next(false)
        this.getCotisationBySeance()
        this.getSoldeTontine()
        this.annuler()
      },
      error => {
        this.isCotise.next(false)
      }
    );
  }

  //save carton
  saveAmande(){
    this.isLoading.next(true)
    this.amande = this.amandeForm.value
    this.amande.idSeance = +this.IdParam
    // this.mangwa.transaction = "RETRAIT"

    this.seanceService.createAmande(this.amande).subscribe(
      res => {
        this.isLoading.next(false)
        this.getAmandeBySeance()
        this.getSoldeMangwas()
        this.annuler()
      },
      error => {
        this.isLoading.next(false)
      }
    )
  }

  //save carton
  savePret(){
    this.isLoading.next(true)
    // this.pret = this.pretForm.value
    this.pret.idSeance = +this.IdParam
    this.pret.idUser = +this.pretForm.controls['idUser'].value;
    this.pret.montant_prete = +this.pretForm.controls['montant'].value;
    // this.mangwa.transaction = "RETRAIT"

    this.seanceService.createPret(this.pret).subscribe(
      res => {
        this.isLoading.next(false)
        this.getPretBySeance()
        this.getCotisationBySeance()
        this.getSoldeTontine()
        this.annuler()
      },
      error => {
        this.isLoading.next(false)
      }
    )
  }

  saveProjet(){
    this.isLoading.next(true)
    this.projet = this.mangwaForm.value
    // this.projet.transaction = "DEPOT"
    this.projet.date = this.dateSeance
    this.projetService.addProjet$(this.projet).subscribe(

      (response ) => {
          this.annuler()
          this.getProjetBySeance()
          this.getSoldeProjet()
          this.isLoading.next(false)
          this.notifService.onSuccess("nouvelle contribution effectuée!")
          return {dataState: DataState.LOADED_STATE, appData: this.dataSubjects.value}
        }
        // startWith({dataState: DataState.LOADED_STATE, appData: this.dataSubjects.value}),
        // catchError((error: string) => {
        //   this.isLoading.next(false)
        //   return of({dataState: DataState.ERROR_STATE, error: error})
        // })
      )
  }

  saveBenef(){
    this.isLoading.next(true)
    this.beneficiaire.idSeance = +this.IdParam
    this.beneficiaire.idUser = +this.benefForm.controls['idUser'].value;
    this.beneficiaire.montant = +this.benefForm.controls['montant'].value;
    this.seanceService.createBeneficiaire(this.beneficiaire).subscribe(
      res => {
        this.isLoading.next(false)
        this.getCotisationBySeance()
        this.getBeneficiaireBySeance()
        this.getSoldeTontine()
        this.annuler()
      },
      error => {
        this.isLoading.next(false)
      }
    )
  }

  updateBenef(){
    this.isLoading.next(true)
    this.beneficiaire.idSeance = this.selectedBeneficiaire.idSeance;
    this.beneficiaire.idUser = +this.benefForm.controls['idUser'].value;
    this.beneficiaire.montant = +this.benefForm.controls['montant'].value;
    this.seanceService.updateBeneficiaire(this.beneficiaire, this.selectedBeneficiaire.id).subscribe(
      res => {
        this.isLoading.next(false)
        this.getCotisationBySeance()
        this.getBeneficiaireBySeance()
        this.getSoldeTontine()
        this.annuler()
      },
      error => {
        this.isLoading.next(false)
      }
    )
  }

  updateAmande(){
    this.isLoading.next(true)
    this.amande = this.amandeForm.value
    this.amande.idSeance = +this.IdParam
    this.seanceService.updateAmande(this.amande, this.selectedAmande.idAmande).subscribe(
      res => {
        this.isLoading.next(false)
        this.getSoldeMangwas()
        this.getAmandeBySeance()
        this.annuler()
      },
      error => {
        this.isLoading.next(false)
      }
    )
  }

  updateDiscipline(){
    this.isLoading.next(true)
    this.discipline.sanction = this.disciplineForm.controls["sanction"].value
    this.discipline.idUser = this.disciplineForm.controls["idUser"].value
    this.discipline.idSeance = +this.IdParam
    this.seanceService.updateSanction(this.discipline, this.selectedDiscipline.id).subscribe(
      res => {
        this.isLoading.next(false)
        this.getDisciplineBySeance()
        this.annuler()
      },
      error => {
        this.isLoading.next(false)
      }
    )
  }

  updatePret(){
    this.isLoading.next(true)
    this.pret.idSeance = +this.IdParam
    this.pret.idUser = +this.pretForm.controls['idUser'].value;
    this.pret.montant_prete = +this.pretForm.controls['montant'].value;
    this.seanceService.updatePret(this.pret, this.selectedPret.idPret).subscribe(
      res => {
        this.isLoading.next(false)
        this.getSoldeTontine()
        this.getPretBySeance()
        this.getCotisationBySeance()
        this.annuler()
      },
      error => {
        this.isLoading.next(false)
      }
    )
  }

  updateProjet(){
    this.isLoading.next(true)
    this.projet = this.mangwaForm.value
    // this.projet.transaction = "DEPOT"
    this.projet.date = this.dateSeance
    this.seanceService.updateProjet(this.projet, this.selectedProjet.id).subscribe(
      res => {
        this.isLoading.next(false)
        this.getSoldeProjet()
        this.getProjetBySeance()
        this.annuler()
      },
      error => {
        this.isLoading.next(false)
      }
    )
  }
  //save carton

  saveDiscipline(){
    this.isLoading.next(true)
    this.discipline.sanction = this.disciplineForm.controls["sanction"].value
    this.discipline.idUser = this.disciplineForm.controls["idUser"].value
    this.discipline.idSeance = +this.IdParam
    // this.mangwa.transaction = "RETRAIT"

    this.seanceService.createDiscipline(this.discipline).subscribe(
      res => {
        this.isLoading.next(false)
        this.getDisciplineBySeance()
        this.annuler()
      },
      error => {
        this.isLoading.next(false)
      }
    )
  }

  annuler() {
    this.formAmande()
    this.formBenef()
    this.formPret()
    this.formDiscipline()
    this.formMangwa()
    this.modalService.dismissAll()
    this.selectedBeneficiaire = new Beneficiaire();
    this.selectedAmande = new Amande();
    this.selectedPret = new Pret();
    this.selectedDiscipline = new Discipline();
    this.titleBenef = 'Nouveau Bénéficiaire';
    this.titleAmande = 'Nouvelle Amande';
    this.titlePret = 'Nouveau Prêt';
    this.titleSanction = 'Nouvelle Sanction';
    this.titleProjet = 'Nouvelle Contribution';
  }

  ngOnDestroy(): void {
    // this.userService.getUserss().subscribe().unsubscribe()
  }

  endSeance() {
    this.isLoading.next(true);
    this.loadingFile.next(true)
    this.openLoader()
    this.seanceService.terminerSéance(+this.IdParam).subscribe(
      resp => {
        this.isLoading.next(false);
        this.notifService.onSuccess('Séance terminée')
        this.loadingFile.next(false)
        this.closeLoader()
        this.getSeanceInfos()
        // const file = new Blob([resp], { type: 'application/pdf' });
        // const fileURL = URL.createObjectURL(file);
        // window.open(fileURL);
      },error => {
        this.loadingFile.next(false)
        this.closeLoader()
      }
    )
  }

  openLoader(){
    this.modalService.open(LoaderComponent, {backdrop: false });
  }

  closeLoader(){
    this.modalService.dismissAll()
  }

  back() {
    this._location.back()
  }

  rembourser(){
    this.isLoading.next(true)

    this.pret.idSeance = +this.IdParam
    // this.pret.idUser = +this.pretForm.controls['idUser'].value;
    this.pret.montant_rembourse = +this.pretRembForm.controls['montant'].value;

    // this.pret.idUser = this.selectedPret.idUser
    // this.pret.dateRemboursement = this.pretRembForm.controls['date'].value
    // this.pret.montant_rembourse = this.pretRembForm.controls['montant'].value
    // this.pret.total = this.pretRembForm.controls['type'].value
    this.seanceService.rembourserPret(this.pret, this.selectedPret.idPret).subscribe(
      nex =>{
          this.annuler()
          this.isLoading.next(false)
          this.notifService.onSuccess("prêt remboursé")
          this.getPretBySeance()
          this.getCotisationBySeance()
          this.getSoldeTontine()
        },
      error => {
        this.isLoading.next(false)
      }
      )
  }
}
