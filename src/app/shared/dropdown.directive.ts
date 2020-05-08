import {
  Directive,
  HostListener,
  HostBinding,
  ElementRef,
} from "@angular/core";

@Directive({
  selector: "[appDropdown]",
})
export class DropdownDirective {
  @HostBinding("class.open") isOpen = false;
  constructor(private elRef: ElementRef) {}

  @HostListener("document:click") toggleOpen(eventData: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target)
      ? !this.isOpen
      : false;
  }
}
