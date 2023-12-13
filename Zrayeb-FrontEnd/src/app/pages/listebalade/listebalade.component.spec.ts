import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListebaladeComponent } from './listebalade.component';

describe('ListebaladeComponent', () => {
  let component: ListebaladeComponent;
  let fixture: ComponentFixture<ListebaladeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListebaladeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListebaladeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
