import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcetingCampingComponent } from './marceting-camping.component';

describe('MarcetingCampingComponent', () => {
  let component: MarcetingCampingComponent;
  let fixture: ComponentFixture<MarcetingCampingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarcetingCampingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarcetingCampingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
