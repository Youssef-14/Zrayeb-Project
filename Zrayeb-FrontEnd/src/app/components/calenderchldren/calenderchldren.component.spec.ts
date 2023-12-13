import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderchldrenComponent } from './calenderchldren.component';

describe('CalenderchldrenComponent', () => {
  let component: CalenderchldrenComponent;
  let fixture: ComponentFixture<CalenderchldrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalenderchldrenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalenderchldrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
