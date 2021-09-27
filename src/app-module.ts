import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgBtAccordionToggle } from './accordion/accordion-toggle';

import { NgbdModalBasic } from './modal/modal-basic.component';

@NgModule({
  imports: [BrowserModule, NgbModule],
  declarations: [NgbdModalBasic, NgBtAccordionToggle],
  exports: [NgbdModalBasic],
  bootstrap: [NgbdModalBasic],
})
export class NgbdModalBasicModule {}
