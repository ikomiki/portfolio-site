import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '@portfolio/material';

import { ExperienceComponent } from './components/experience/experience.component';
import { GreetingComponent } from './components/greeting/greeting.component';
import { KnowledgeComponent } from './components/knowledge/knowledge.component';
import { HomeComponent } from './containers/home/home.component';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [
    HomeComponent,
    GreetingComponent,
    ExperienceComponent,
    KnowledgeComponent,
  ],
})
export class HomeModule {}
