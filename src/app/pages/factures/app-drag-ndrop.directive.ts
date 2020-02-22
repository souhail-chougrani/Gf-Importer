import { Directive, HostBinding, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[appDragNdrop]'
})
export class AppDragNdropDirective {

  @HostBinding('class.fileover') fileOver: boolean;
  @Output() fileDropped = new EventEmitter<any>();
  constructor() { }
  //Dragover listener
  @HostListener('dragover', ['$event']) public onDragOver(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = true;
  }
  //Dragleave listener
  @HostListener('dragleave', ['$event']) public onDragLeave(evt) {
    evt.preventDefault();
    evt.stopPropagation();
  }
  //Drop listener
  @HostListener('drop', ['$event']) public ondrop(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = false;
    const files = evt.dataTransfer.files;
    // debugger;
    if (files.length > 0) {
      this.fileDropped.emit(files);
    }
  }


}
