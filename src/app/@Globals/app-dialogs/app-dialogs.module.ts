import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogWrapperComponent } from './dialog-wrapper/dialog-wrapper.component';
import { ThemeModule } from '../../@theme/theme.module';
import { NbButtonModule, NbCardModule, NbIconModule } from '@nebular/theme';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    NbButtonModule,
    NbCardModule,
    NbIconModule
  ],
  declarations: [
    DialogWrapperComponent
  ],
  entryComponents: [
    DialogWrapperComponent
  ]
})
export class AppDialogsModule { }
