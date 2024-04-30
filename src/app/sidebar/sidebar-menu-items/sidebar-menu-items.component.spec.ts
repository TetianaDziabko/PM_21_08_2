import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarMenuItemsComponent } from './sidebar-menu-items.component';

describe('SidebarMenuItemsComponent', () => {
  let component: SidebarMenuItemsComponent;
  let fixture: ComponentFixture<SidebarMenuItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarMenuItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidebarMenuItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
