import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

// tslint:disable: max-classes-per-file
@Component({
  selector: 'portfolio-greeting',
  template: '',
})
class MockGreetingComponent {}

@Component({
  selector: 'portfolio-experience',
  template: '',
})
class MockExperienceComponent {}

@Component({
  selector: 'portfolio-knowledge',
  template: '',
})
class MockKnowledgeComponent {}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        MockGreetingComponent,
        MockExperienceComponent,
        MockKnowledgeComponent,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
