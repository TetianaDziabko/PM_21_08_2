import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraficSourcesComponent } from './trafic-sources.component';

describe('TraficSourcesComponent', () => {
  let component: TraficSourcesComponent;
  let fixture: ComponentFixture<TraficSourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TraficSourcesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TraficSourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
