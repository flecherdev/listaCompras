import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomizablePage } from './customizable';

@NgModule({
  declarations: [
    CustomizablePage,
  ],
  imports: [
    IonicPageModule.forChild(CustomizablePage),
  ],
})
export class CustomizablePageModule {}
