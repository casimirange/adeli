import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ICredentialsSignup} from "../../../_model/signup";
import {IToken} from "../../../_model/token";
import {BehaviorSubject, Observable, Subscription} from "rxjs";
import {AuthService} from "../../../_services/auth.service";
import {Router} from "@angular/router";
import {NotifsService} from "../../../_services/notifications/notifs.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit, OnDestroy {

  signup: FormGroup;
  credentials: ICredentialsSignup = new ICredentialsSignup()
  user?: IToken;
  errorMessage = '';
  private isLoading = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoading.asObservable();
  // readonly DataState = DataState;
  form: any;
  role: string[] = []
  private mySubscription: Subscription;
  load: boolean;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private _location: Location,
              private notifService: NotifsService) {
    this.signup = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', [Validators.required, Validators.pattern('^[0-9]'), Validators.minLength(9), Validators.maxLength(9)]],
      montant: ['', [Validators.required, Validators.pattern('^\\d+(\\.\\d{1,2})?$')]],
      // username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*+./;:-]).{8,}$")]],
      firstName: ['', [Validators.required, Validators.minLength(4)]],
      lastName: ['', [Validators.required, Validators.minLength(4)]],
      typeAccount: ['',],
      roleName: ['',],
    });

    this.form = this.signup.controls;
    JSON.parse(localStorage.getItem('Roles').toString()).forEach(authority => {
      this.role.push(authority);
    });
  }


  ngOnInit(): void {

  }



  saveUser() {
    this.isLoading.next(true);
    this.credentials = this.signup.value;

      this.credentials.montant = +this.signup.controls["montant"].value
      // console.log('user1', this.credentials)
      this.credentials.email = this.signup.controls['email'].value;
    this.credentials.typeAccount = this.signup.controls['typeAccount'].value;
    this.credentials.telephone = this.signup.controls['telephone'].value;
    this.credentials.firstName = this.signup.controls['firstName'].value;
    this.credentials.lastName = this.signup.controls['lastName'].value;
    this.credentials.roleName = this.signup.controls['roleName'].value;
    this.credentials.password = this.signup.controls['password'].value;
    // this.credentials.pinCode = aesUtil.encrypt(key, this.signup.controls['pinCode'].value);
    // this.credentials.position = aesUtil.encrypt(key, this.signup.controls['position'].value);
    // on recherche l'id du magasin dans la liste des magasins
  // >>>>>>>
  //   37
  //   d14d372724acd031f893c0236343c371360e75
  //
  //   const store = this.stores.find(store => store.localization === this.signup.controls['idStore'].value)
  //   this.credentials.idStore = aesUtil.encrypt(key, store.internalReference.toString());
    // this.credentials.idStore = aesUtil.encrypt(key, '123456789');
    // console.log('user2', this.credentials)
    this.authService.signup(this.credentials).subscribe(
      resp => {
        this.isLoading.next(false);
        this.notifService.onSuccess('nouvel utilisateur enregistré')
        this.router.navigate(['users'])
      },
      error => {
        this.isLoading.next(false)
        // this.errorMessage = error.error.message;
        // console.log("voici l'erreur ", error.error.message)
      }
    )
  }

  back() {
    this._location.back()
  }

  ngOnDestroy(): void {
    this.mySubscription ? this.mySubscription.unsubscribe() : null
  }
}
