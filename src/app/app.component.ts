import {Component, OnDestroy, OnInit} from '@angular/core';
import {NotifsService} from "./_services/notifications/notifs.service";
import {fromEvent, interval, merge, Observable, Observer, of, Subscription} from "rxjs";
import {filter, first, map, mapTo} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {BnNgIdleService} from "bn-ng-idle";
import {NavigationStart, Router} from "@angular/router";
import {TokenService} from "./_services/token/token.service";
import {Location} from "@angular/common";
import {ConnectionService} from "ng-connection-service";
import IdleTimer from "src/app/_helpers/idleTimer.js"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'gulfin';
  source = interval(3000)
  url: string = '';
  timer: any;

  constructor(private notifsService: NotifsService, private router: Router, private _location: Location,) {
  }

  ngOnInit(): void {
    this.router.events.subscribe((val) => {
      this.url = this._location.path()
    });
    if (!this.url.includes('/auth')) {
      this.timer = new IdleTimer({
        timeout: 1800, //expired after 30 minutes
        onTimeout: () => {
          if (!this.url.startsWith('/auth')) {
            this.notifsService.inactivityUser()
          }
        }
      });
    }
  }

  ngOnDestroy(): void {
    this.timer.clear();
  }
}
