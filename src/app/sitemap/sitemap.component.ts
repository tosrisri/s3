import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h5>Sitemap</h5>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <ul class="sitemap-links">
        <li class="nav-item" [routerLinkActive]="['active']">
          <a class="nav-link" [routerLink]="['/home']" (click)="isMenuCollapsed = true"  title="Home">Home</a>
        </li>
        <li class="nav-item" [routerLinkActive]="['active']">
          <a class="nav-link" [routerLink]="['/experience']" (click)="isMenuCollapsed = true"  title="Experience">Experience</a>
        </li>
        <li class="nav-item" [routerLinkActive]="['active']">
          <a class="nav-link" [routerLink]="['/portfolio']" (click)="isMenuCollapsed = true"  title="Portfolio">Portfolio</a>
        </li>
        <li class="nav-item" [routerLinkActive]="['active']">
          <a class="nav-link" [routerLink]="['/services']" (click)="isMenuCollapsed = true"  title="Services">Services</a>
        </li>
        <li class="nav-item" [routerLinkActive]="['active']">
          <a class="nav-link" [routerLink]="['/tutorials']" (click)="isMenuCollapsed = true"  title="Tutorials">Tutorials</a>
        </li>
        <li class="nav-item" [routerLinkActive]="['active']">
          <a class="nav-link" [routerLink]="['/contact']" (click)="isMenuCollapsed = true"  title="Contact">Contact</a>
        </li>
      </ul>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
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