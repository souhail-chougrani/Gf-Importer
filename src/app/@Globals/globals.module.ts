import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppDialogsModule } from './app-dialogs/app-dialogs.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AppDialogsModule,
    ReactiveFormsModule
  ],
  declarations: [
  ]
})
export class GlobalsModule { }
