import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

export interface ExperienceItem {
  title: string;
  subtitle: string;
  period: string;
  content: string;
}

@Component({
  selector: 'portfolio-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceComponent implements OnInit {
  items: ExperienceItem[];
  constructor() {
    this.items = [
      {
        title: 'フルスタックエンジニア',
        subtitle: 'Angular, AWS(EC2, Lambda), Firebase、PHP、Python',
        period: 'Feb, 2016 -',
        content: `放送やスポーツ業界でのウェブサイト開発のフルスタックエンジニアを努めています。フロントエンドではAngular、バックエンドではAWS、Firestoreを主に取り扱っています。`,
      },
      {
        title: 'Windows開発',
        subtitle: 'C++(C++ Builder, MFC), C#、Visual Basic、ASP',
        period: 'Apr, 1998 - Aug 2014',
        content: `企業向けプロダクトのWindowsの開発とテスティングに携わっていました。`,
      },
      {
        title: '個人事業・開発',
        subtitle: 'C++(Qt, yaneGameSDK)、吉里吉里、Delphi',
        period: 'Apr 2000 - Feb, 2011',
        content: `同人誌購入代行サイト（副代表、サイト開発運用、ツール制作）、同人ゲームサークル（プログラミング、スクリプティング、シナリオライティング担当）などを個人事業として運営していました。`,
      },
    ];
  }
  ngOnInit(): void {}
}
