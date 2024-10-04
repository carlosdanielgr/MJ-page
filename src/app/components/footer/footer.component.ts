import { Component } from '@angular/core';
import { API_WHATSAPP } from '../../global.constant';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  API_WHATSAPP = API_WHATSAPP;
}
