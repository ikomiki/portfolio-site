import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';

import { CoreModule } from '@portfolio/core';
import { HomeComponent, HomeModule } from '@portfolio/home';
import { LayoutModule } from '@portfolio/layout';
import { MaterialModule } from '@portfolio/material';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    HomeModule,
    LayoutModule,
    MaterialModule,
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        component: HomeComponent,
      },
    ]),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
    // ServiceWorkerModule.register('ngsw-worker.js', { enabled: true }),
    RouterModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
