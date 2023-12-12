import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaladeFormComponent } from './balade-form.component';

describe('BaladeFormComponent', () => {
  let component: BaladeFormComponent;
  let fixture: ComponentFixture<BaladeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaladeFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BaladeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
