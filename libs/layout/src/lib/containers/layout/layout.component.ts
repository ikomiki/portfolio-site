import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'portfolio-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
