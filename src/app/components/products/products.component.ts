import { Component } from '@angular/core';
import { API_WHATSAPP } from '../../global.constant';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  API_WHATSAPP = API_WHATSAPP;
}
