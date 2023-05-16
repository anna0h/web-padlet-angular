import {Component} from '@angular/core';
import {Padlet} from "./shared/padlet";

@Component({
  selector: 'bs-root',
  template: `<bs-padlet-list *ngIf="listOn" (showDetailsEvent)="showDetails($event)"></bs-padlet-list>
  <bs-padlet-details *ngIf="detailsOn" [padlet]="padlet"
                   (showListEvent)="showList()"></bs-padlet-details>`,
  styles: []
})
export class AppComponent {
  listOn = true;
  detailsOn = false;

  padlet : Padlet |undefined;

  title = 'padlet';

  showList() {
    this.listOn = true;
    this.detailsOn = false;
  }
  showDetails(padlet: Padlet) {
    this.padlet = padlet;
    this.listOn = false;
    this.detailsOn = true;
  }
}