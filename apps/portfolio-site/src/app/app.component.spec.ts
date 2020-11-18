import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

// tslint:disable: max-classes-per-file
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'router-outlet',
  template: '',
})
class MockRouterComponent {}

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'portfolio-layout',
  template: '',
})
class MockPortfolioLayoutComponent {}

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, MockRouterComponent, MockPortfolioLayoutComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'portfolio-site'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('portfolio-site');
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to portfolio-site!');
  // });
});
