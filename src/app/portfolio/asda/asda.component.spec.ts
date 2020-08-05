import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsdaComponent } from './asda.component';

describe('AsdaComponent', () => {
  let component: AsdaComponent;
  let fixture: ComponentFixture<AsdaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsdaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
