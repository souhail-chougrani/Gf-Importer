import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToCurrencyDirective } from './directives/to-currency.directive';

@NgModule({
   imports: [
      CommonModule
   ],
   declarations: [
      ToCurrencyDirective
   ],
   exports:[
      ToCurrencyDirective
   ]
})
export class GlobalModule { }
