import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroomBrideComponent } from './groom-bride.component';

describe('GroomBrideComponent', () => {
  let component: GroomBrideComponent;
  let fixture: ComponentFixture<GroomBrideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroomBrideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroomBrideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
