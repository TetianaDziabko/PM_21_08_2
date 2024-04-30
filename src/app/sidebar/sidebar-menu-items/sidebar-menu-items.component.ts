import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-menu-items',
  standalone: true,
  //imports: [],
  templateUrl: './sidebar-menu-items.component.html',
  styleUrl: './sidebar-menu-items.component.scss'
})
export class SidebarMenuItemsComponent {
  @Input() icon: string = '';
  @Input() label: string = '';
}
