import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <ul class="sitemap-links">
        <li class="nav-item" [routerLinkActive]="['active']">
          <a class="nav-link" [routerLink]="['/home']"  title="Home">Home</a>
        </li>
        <li class="nav-item" [routerLinkActive]="['active']">
          <a class="nav-link" [routerLink]="['/experience']"  title="Experience">Experience</a>
        </li>
        <li class="nav-item" [routerLinkActive]="['active']">
          <a class="nav-link" [routerLink]="['/portfolio']"  title="Portfolio">Portfolio</a>
        </li>
        <li class="nav-item" [routerLinkActive]="['active']">
          <a class="nav-link" [routerLink]="['/services']"  title="Services">Services</a>
        </li>
        <li class="nav-item" [routerLinkActive]="['active']">
          <a class="nav-link" [routerLink]="['/tutorials']"  title="Tutorials">Tutorials</a>
        </li>
        <li class="nav-item" [routerLinkActive]="['active']">
          <a class="nav-link" [routerLink]="['/contact']"  title="Contact">Contact</a>
        </li>
      </ul>
    </div>
  `
})
export class NgbdModalContent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'app-sitemap',
  templateUrl: './sitemap.component.html',
  styleUrls: ['./sitemap.component.scss']
})
export class SitemapComponent {

  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(NgbdModalContent, {windowClass: 'modal-holder', size: 'lg', centered: true});
  }
  
}