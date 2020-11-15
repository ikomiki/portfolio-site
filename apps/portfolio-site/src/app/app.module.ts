import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HomeModule, HomeComponent } from '@portfolio/home';
import { LayoutModule } from '@portfolio/layout';
import { MaterialModule } from '@portfolio/material';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
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
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
