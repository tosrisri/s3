import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParaminfoComponent } from './paraminfo.component';

describe('ParaminfoComponent', () => {
  let component: ParaminfoComponent;
  let fixture: ComponentFixture<ParaminfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParaminfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParaminfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
