import { Component, Inject } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { UpdateAvailableEvent } from '@angular/service-worker';

export interface BottomSheetDataInput {
  event: UpdateAvailableEvent;
}
export interface BottomSheetDataOutput {
  result: boolean;
}

@Component({
  template: `<div>
    <span>アプリケーションが更新されました。直ちにアクティブ化しますか？</span>
    <button (click)="clickOk($event)">アクティブ化する</button>
    <button (click)="clickCancel($event)">キャンセル</button>
  </div>`,
})
export class BottomSheetUpdateSheetComponent {
  constructor(
    private bottomSheetRef: MatBottomSheetRef<
      BottomSheetUpdateSheetComponent,
      BottomSheetDataOutput
    > // @Inject(MAT_BOTTOM_SHEET_DATA) private data: BottomSheetDataInput
  ) {}

  clickOk(event: MouseEvent) {
    this.bottomSheetRef.dismiss({ result: true });
    event.preventDefault();
  }

  clickCancel(event: MouseEvent) {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
