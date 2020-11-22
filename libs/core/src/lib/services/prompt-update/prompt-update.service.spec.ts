import { TestBed } from '@angular/core/testing';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ServiceWorkerModule } from '@angular/service-worker';

import { MaterialModule } from '@portfolio/material';

import { PromptUpdateService } from './prompt-update.service';

describe('PromptUpdateService', () => {
  let service: PromptUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: false }),
        MaterialModule,
      ],
      providers: [MatBottomSheet, PromptUpdateService],
    });
    service = TestBed.inject(PromptUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
