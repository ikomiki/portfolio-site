import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

export interface KnowledgeItem {
  icon?: string;
  caption: string;
  color?: string;
}

export interface KnowledgeCategory {
  category: string;
  items: KnowledgeItem[];
}

@Component({
  selector: 'portfolio-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KnowledgeComponent implements OnInit {
  categories: KnowledgeCategory[];
  constructor() {
    this.categories = [
      {
        category: 'プログラミング言語',
        items: [
          {
            caption: 'TypeScript',
            color: 'primary',
          },
          {
            caption: 'HTML',
            color: 'primary',
          },
          {
            caption: 'CSS',
            color: 'primary',
          },
          {
            caption: 'JavaScript',
          },
          {
            caption: 'Python',
          },
          {
            caption: 'Delphi',
          },
          {
            caption: 'C++',
          },
          {
            caption: 'C#',
          },
          {
            caption: 'PHP',
          },
          {
            caption: 'SQL',
          },
          {
            caption: '吉里吉里',
          },
        ],
      },

      {
        category: 'フレームワーク',
        items: [
          {
            caption: 'Angular',
            color: 'primary',
          },
          {
            caption: 'node.js',
          },
          {
            caption: 'jQuery',
          },
          {
            caption: 'Qt(C++)',
          },
          {
            caption: 'MFC(C++)',
          },
          {
            caption: 'VCL(Delphi)',
          },
          {
            caption: 'Zend Framework 1(PHP)',
          },
        ],
      },

      {
        category: 'クラウド コンピューティング',
        items: [
          {
            caption: 'AWS Lambda',
            color: 'primary',
          },
          {
            caption: 'Amazon EC2',
            color: 'primary',
          },
          {
            caption: 'Firebase Functions',
          },
        ],
      },

      {
        category: 'データベース',
        items: [
          {
            caption: 'Cloud Firestore',
            color: 'primary',
          },
          {
            caption: 'Amazon DynamoDB',
            color: 'primary',
          },
          {
            caption: 'SQLite',
          },
          {
            caption: 'Firebase Realtime Database',
          },
          {
            caption: 'PostgreSQL',
          },
        ],
      },

      {
        category: 'バージョンコントロール、IoC',
        items: [
          {
            caption: 'Git',
            color: 'primary',
          },
          {
            caption: 'Bitbucket Pipelines',
            color: 'primary',
          },
          {
            caption: 'AWS CloudFormation',
          },
          {
            caption: 'AWS SAM',
          },
        ],
      },

      {
        category: 'プラットフォーム',
        items: [
          {
            caption: 'Web',
            color: 'primary',
          },
          {
            caption: 'AWS',
            color: 'primary',
          },
          {
            caption: 'macOS',
            color: 'primary',
          },
          {
            caption: 'Firebase',
          },
          {
            caption: 'Windows',
          },
          {
            caption: 'Linux',
          },
          {
            caption: 'Docker',
          },
        ],
      },

      {
        category: 'IDE',
        items: [
          {
            caption: 'Visual Studio Code',
            color: 'primary',
          },
          {
            caption: 'Visual Studio',
          },
          {
            caption: '秀丸エディタ',
          },
        ],
      },
    ];
  }

  ngOnInit(): void {}
}
