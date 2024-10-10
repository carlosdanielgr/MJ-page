import { Component } from '@angular/core';
import { API_WHATSAPP } from '../../global.constant';

@Component({
  selector: 'app-best-sellers',
  standalone: true,
  imports: [],
  templateUrl: './best-sellers.component.html',
  styleUrl: './best-sellers.component.scss',
})
export class BestSellersComponent {
  API_WHATSAPP = API_WHATSAPP;
}
