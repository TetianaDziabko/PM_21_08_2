import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blocks',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './blocks.component.html',
  styleUrl: './blocks.component.scss'
})

export class BlocksComponent {
  menuItems: { icon: string; label: string; value: string}[] = [
    { icon: '/assets/img/visitors.png', label: 'Visitors', value: '125 K'},
    { icon: '/assets/img/new-order.png', label: 'New Order', value: '28 K'},
    { icon: '/assets/img/sales.png', label: 'Sales', value: '25 K'},
    { icon: '/assets/img/shipping.png', label: 'Shipping', value: '12 K'}
  ];
}
