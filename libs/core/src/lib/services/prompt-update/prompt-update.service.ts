import { Injectable } from '@angular/core';
import {
  MatBottomSheet,
  MatBottomSheetConfig,
} from '@angular/material/bottom-sheet';
import { SwUpdate, UpdateAvailableEvent } from '@angular/service-worker';

import {
  BottomSheetDataInput,
  BottomSheetDataOutput,
  BottomSheetUpdateSheetComponent,
} from '../../components/bottom-sheet-update-sheet/bottom-sheet-update-sheet.component';

// tslint:disable-next-line: max-classes-per-file
@Injectable()
export class PromptUpdateService {
  constructor(updates: SwUpdate, private bottomSheet: MatBottomSheet) {
    if (updates.isEnabled) {
      updates.available.subscribe(async (event) => {
        console.log('updates.available');
        const result = await this.promptUser(event);
        console.log('promptUser', result);
        if (result) {
          console.log('updates.activateUpdate() begin');
          updates.activateUpdate().then(() => {
            console.log('updates.activateUpdate() end');
            document.location.reload();
          });
        }
      });
    }
  }

  promptUser(event: UpdateAvailableEvent): Promise<boolean> {
    console.log(
      'アプリケーションが更新されました。直ちにアクティブ化しますか？'
    );
    return new Promise<boolean>((resolve, reject) => {
      const data: BottomSheetDataInput = { event };
      const config: MatBottomSheetConfig = { data };
      const ref = this.bottomSheet.open<
        BottomSheetUpdateSheetComponent,
        BottomSheetDataInput,
        BottomSheetDataOutput
      >(BottomSheetUpdateSheetComponent, config);
      ref.afterDismissed().subscribe((output) => {
        console.log('afterDismissed', output);
        resolve(output?.result);
      });
    });
  }
}
