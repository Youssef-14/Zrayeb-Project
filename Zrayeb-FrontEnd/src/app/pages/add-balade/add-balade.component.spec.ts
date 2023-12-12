import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBaladeComponent } from './add-balade.component';

describe('AddBaladeComponent', () => {
  let component: AddBaladeComponent;
  let fixture: ComponentFixture<AddBaladeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddBaladeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddBaladeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
