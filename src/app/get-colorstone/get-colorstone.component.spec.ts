import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetColorstoneComponent } from './get-colorstone.component';

describe('GetColorstoneComponent', () => {
  let component: GetColorstoneComponent;
  let fixture: ComponentFixture<GetColorstoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetColorstoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetColorstoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
