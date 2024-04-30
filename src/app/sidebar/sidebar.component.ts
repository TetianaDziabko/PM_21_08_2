import { Component } from '@angular/core';
import { SidebarMenuItemsComponent } from './sidebar-menu-items/sidebar-menu-items.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SidebarMenuItemsComponent, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})

export class SidebarComponent {
  menuItems: { icon: string; label: string; }[] = [
    { icon: '/assets/img/Invoice.png', label: 'Invoice' },
    { icon: '/assets/img/charts.png', label: 'Charts' },
    { icon: '/assets/img/snippets.png', label: 'Snippets' },
    { icon: '/assets/img/vidgets.png', label: 'UI Widgets' },
    { icon: '/assets/img/forms.png', label: 'Forms' },
    { icon: '/assets/img/componets.png', label: 'Components' },
    { icon: '/assets/img/plugin.png', label: 'Plugins' },
    { icon: '/assets/img/email.png', label: 'Email' }
];    
}