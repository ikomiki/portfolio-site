import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';

import dayjs, { UnitType } from 'dayjs';

@Component({
  selector: 'portfolio-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GreetingComponent implements OnInit {
  greeting: string;
  name = 'いこみき';

  constructor(private cd: ChangeDetectorRef) {
    this.greeting = this.getGreeting();
    this.cd.markForCheck();
  }

  ngOnInit(): void {}

  getGreeting(): string {
    const now = dayjs();
    const hour = now.get('hour');
    let greeting: string;
    const morningHour = 6;
    const helloHuor = 10;
    const afternoonHour = 18;
    if (morningHour <= hour && hour < helloHuor) {
      greeting = 'おはようございます。';
    } else if (helloHuor <= hour && hour < afternoonHour) {
      greeting = 'こんにちは。';
    } else {
      greeting = 'こんばんは。';
    }
    return greeting;
  }
}
