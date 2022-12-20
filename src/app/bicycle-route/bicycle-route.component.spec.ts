import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BicycleRouteComponent } from './bicycle-route.component';

describe('BicycleRouteComponent', () => {
  let component: BicycleRouteComponent;
  let fixture: ComponentFixture<BicycleRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BicycleRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BicycleRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
