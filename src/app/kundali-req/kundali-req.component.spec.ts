import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KundaliReqComponent } from './kundali-req.component';

describe('KundaliReqComponent', () => {
  let component: KundaliReqComponent;
  let fixture: ComponentFixture<KundaliReqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KundaliReqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KundaliReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
