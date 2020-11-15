import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './containers/home/home.component';
import { GreetingComponent } from './components/greeting/greeting.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { KnowledgeComponent } from './components/knowledge/knowledge.component';
import { MaterialModule } from '@portfolio/material';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [HomeComponent, GreetingComponent, ExperienceComponent, KnowledgeComponent],
})
export class HomeModule {}
