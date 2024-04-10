import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarningGraphComponent } from './earning-graph.component';

describe('EarningGraphComponent', () => {
  let component: EarningGraphComponent;
  let fixture: ComponentFixture<EarningGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EarningGraphComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EarningGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
