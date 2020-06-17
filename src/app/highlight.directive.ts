import { Directive,ElementRef,HostListener} from '@angular/core';
import { Quote } from '@angular/compiler';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

    
  constructor(private elem:ElementRef){}

  @HostListener("click") onClicks(){
    this.textDeco("black")
    
  }

  @HostListener("dblclick") onDoubleClicks(){
    this.textDeco("None")
  }

  private textDeco(action:string){
    this.elem.nativeElement.style.color=action;

  }
}