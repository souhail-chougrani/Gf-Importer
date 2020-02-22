import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
  selector: '[appToCurrency]',
  providers: [NgModel]
})
export class ToCurrencyDirective {

  constructor(private el: ElementRef, private model:NgModel) {}

  @HostListener('blur')
  public onInputChange(){
    let value = this.el.nativeElement.value;
    //this.model.valueAccessor.writeValue(this._toFixedValue(value));
    //console.log(event);
    
    this.el.nativeElement.value = this._toFixedValue(value);
  }

  private _toFixedValue(value : any){
    return parseFloat(value).toFixed(2);
  }

}
