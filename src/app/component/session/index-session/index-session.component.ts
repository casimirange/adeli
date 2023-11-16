import {Component, ElementRef, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BehaviorSubject, Observable, of, Subscription} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NotifsService} from "../../../_services/notifications/notifs.service";
import {Router} from "@angular/router";
import {AppState} from "../../../_interfaces/app-state";
import {CustomResponse} from "../../../_interfaces/custom-response";
import {catchError, map, startWith} from "rxjs/operators";
import Swal from "sweetalert2";
import {SessionService} from "../../../_services/session/session.service";
import {DataState} from "../../../_enum/data.state.enum";
import {Session} from "../../../_model/session";
@Component({
  selector: 'app-index-session',
  templateUrl: './index-session.component.html',
  styleUrls: ['./index-session.component.css']
})
export class IndexSessionComponent implements OnInit {

  session: Session = new Session();
  sessionForm: FormGroup;
  sessions: Session[] = []
  appState$: Observable<AppState<CustomResponse<Session>>>;
  readonly DataState = DataState;
  private dataSubjects = new BehaviorSubject<CustomResponse<Session>>(null);
  private isLoading = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoading.asObservable();
  page: number = 1;
  size: number = 10;
  roleUser = localStorage.getItem('userAccount').toString()
  modalTitle = 'Enregistrer nouvelle session'


  @ViewChild('mymodal', {static: false}) viewMe?: ElementRef<HTMLElement>;
  totalPages: number;
  totalElements: number;
  role: string[] = []
  onFilter: boolean = false;
  dateFilter? = ''
  typeFilter? = ''
  clientNameFilter? = ''
  companyNameFilter? = ''

  constructor(private fb: FormBuilder, private modalService: NgbModal, private sessionService: SessionService, private router: Router,
              private notifService: NotifsService) {
    this.formSession();

    JSON.parse(localStorage.getItem('Roles').toString()).forEach(authority => {
      this.role.push(authority);
    });
  }

  ngOnInit(): void {
    this.getSessions()
  }

  getSessions() {
    this.appState$ = this.sessionService.sessions$(this.page - 1, this.size)
      .pipe(
        map(response => {
          // console.log(response)
          this.dataSubjects.next(response)
          this.sessions = response.content
          this.notifService.onSuccess('chargement des sessions')
          return {dataState: DataState.LOADED_STATE, appData: response}
        }),
        startWith({dataState: DataState.LOADING_STATE, appData: null}),
        catchError((error: string) => {
          return of({dataState: DataState.ERROR_STATE, error: error})
        })
      )
  }

  pageChange(event: number) {
    this.page = event
    this.appState$ = this.sessionService.sessions$(this.page - 1, this.size)
      .pipe(
        map(response => {
          this.dataSubjects.next(response)
          // this.notifsService.onSuccess('Chargement des commandes')
          return {dataState: DataState.LOADED_STATE, appData: response}
        }),
        startWith({dataState: DataState.LOADING_STATE, appData: null}),
        catchError((error: string) => {
          return of({dataState: DataState.ERROR_STATE, error: error})
        })
      )
  }

  formSession() {
    this.sessionForm = this.fb.group({
      mangwa: ['', [Validators.required, Validators.pattern('^\\d+(\\.\\d{1,2})?$')]],
      beginDate: ['', Validators.required],
      endDate: ['', Validators.required],
      tax: ['', [Validators.required, Validators.pattern('^\\d+(\\.\\d{1,2})?$')]],
    });
  }

  saveSession() {
    this.isLoading.next(true)
    this.session = this.sessionForm.value
    this.session.creator = localStorage.getItem('firstName').toString()
    this.appState$ = this.sessionService.addSession$(this.session)
      .pipe(
        map((response) => {
          this.dataSubjects.next(
            {...this.dataSubjects.value, content: [response, ...this.dataSubjects.value.content]}
          )
          this.annuler()
          this.isLoading.next(false)
          this.notifService.onSuccess("Nouvelle session créée!")
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
    this.formSession();
    // this.sessionForm.reset()
    this.modalService.dismissAll()
    this.modalTitle = 'Enregistrer nouvelle session'
  }

  open(content: any) {
    this.annuler()
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg'});
    this.modalTitle = 'Enregistrer nouvelle session'
  }

  deleteSession(session: Session) {

    Swal.fire({
      title: 'Supprimer session',
      html: "Voulez-vous vraiment supprimer la session de " + session.name.bold() + " ?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3f6ad8',
      cancelButtonColor: '#d92550',
      confirmButtonText: 'OUI',
      cancelButtonText: 'NON',
      allowOutsideClick: true,
      focusConfirm: false,
      focusCancel: true,
      focusDeny: true,
      backdrop: `rgba(0, 0, 0, 0.4)`,
      showLoaderOnConfirm: true
    }).then((result) => {
      if (result.value) {
        this.deleteSessions(session.name)
      }
    })

  }

  updateSessionModal(mymodal: TemplateRef<any>, session: Session) {
    this.modalService.open(mymodal, {ariaLabelledBy: 'modal-basic-title', size: 'lg'});
    this.modalTitle = 'Modifier session'
    this.session = session
    console.log(session)
  }

  updateSession() {
    this.isLoading.next(true)
    let name = this.session.name
    console.log(this.session)
    this.session = this.sessionForm.value
    this.session.creator = localStorage.getItem('firstName').toString()
    this.appState$ = this.sessionService.updateSession$(this.session, name)
      .pipe(
        map(response => {
          const index = this.dataSubjects.value.content.findIndex(session => session.id === response.id)
          this.dataSubjects.value.content[index] = response
          this.isLoading.next(false)
          this.notifService.onSuccess("Session modifiée avec succès!")
          this.annuler()
          return {dataState: DataState.LOADED_STATE, appData: this.dataSubjects.value}
        }),
        startWith({dataState: DataState.LOADED_STATE, appData: this.dataSubjects.value}),
        catchError((error: string) => {
          this.isLoading.next(false)
          return of({dataState: DataState.ERROR_STATE, error: error})
        })
      )
  }

  deleteSessions(name: string) {
    this.isLoading.next(true)
    this.appState$ = this.sessionService.deleteSession$(name)
      .pipe(
        map(response  => {
          const index = this.dataSubjects.value.content.findIndex(session => session.name === name)
          this.dataSubjects.value.content[index] = response
          this.isLoading.next(false)
          this.notifService.onSuccess("session terminée avec succès!")
          return {dataState: DataState.LOADED_STATE, appData: this.dataSubjects.value}
        }),
        startWith({dataState: DataState.LOADED_STATE, appData: this.dataSubjects.value}),
        catchError((error: string) => {
          this.isLoading.next(false)
          return of({dataState: DataState.ERROR_STATE, error: error})
        })
      )
  }

  showFilter() {
    this.onFilter = !this.onFilter

    if (!this.onFilter) {
      this.dateFilter = '';
      this.companyNameFilter = '';
      this.typeFilter = '';
      this.clientNameFilter = '';
    }
  }

}
