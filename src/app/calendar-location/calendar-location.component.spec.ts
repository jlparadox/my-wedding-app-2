import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarLocationComponent } from './calendar-location.component';

describe('CalendarLocationComponent', () => {
  let component: CalendarLocationComponent;
  let fixture: ComponentFixture<CalendarLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
