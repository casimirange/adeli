import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {TokenService} from "../../../_services/token/token.service";
import {ConfigOptions} from "../../../configOptions/config-options";
import {Router} from "@angular/router";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  firstName: string | null = '';
  lastName: string | null = '';
  isLogged: boolean = false;
  roleUser = localStorage.getItem('userAccount').toString()
  constructor(private tokenService: TokenService, public globals: ConfigOptions, private router: Router) { }


  // constructor(private tokenService: TokenService, private statusAccountSercive: StatusAccountService, public globals: ConfigOptions, private router: Router) { }


  ngOnInit(): void {
    this.isLogged = this.tokenService.isLogged();
    this.firstName = localStorage.getItem('firstName')
    this.lastName = localStorage.getItem('lastName')
  }

  logout(){
    this.tokenService.clearToken();
  }

  @HostBinding('class.isActive')
  get isActiveAsGetter() {
    return this.isActive;
  }

  isActive: boolean;

  toggleSidebarMobile() {
    this.globals.toggleSidebarMobile = !this.globals.toggleSidebarMobile;
  }

  toggleHeaderMobile() {
    this.globals.toggleHeaderMobile = !this.globals.toggleHeaderMobile;
  }

  showProfile() {
// <<<<<<< HEAD
    this.router.navigate(['/users/profile', localStorage.getItem('id')])
    // [routerLink]=""
// =======
//     this.router.navigate(['/profile/user', localStorage.getItem('id')])
// >>>>>>> 37d14d372724acd031f893c0236343c371360e75
  }
}
