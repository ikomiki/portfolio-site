import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';

import {
  CheckForUpdateService,
  LogUpdateService,
  PromptUpdateService,
} from '@portfolio/core';

import { Subscription } from 'rxjs';

@Component({
  selector: 'portfolio-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'portfolio-site';
  private subscription = new Subscription();
  constructor(
    private swUpdate: SwUpdate,
    private router: Router,
    private _c: CheckForUpdateService,
    private _p: PromptUpdateService,
    private _l: LogUpdateService
  ) {}

  ngOnInit(): void {
    this.subscription.add(
      this.router.events.subscribe((events) => {
        if (events instanceof NavigationEnd) {
          if (this.swUpdate.isEnabled) {
            this.swUpdate.checkForUpdate();
          }
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  updateSw() {
    console.log('updateSw!!!');
    this.swUpdate.checkForUpdate();
  }
}
