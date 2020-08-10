import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZemosoComponent } from './zemoso.component';

describe('ZemosoComponent', () => {
  let component: ZemosoComponent;
  let fixture: ComponentFixture<ZemosoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZemosoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZemosoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
