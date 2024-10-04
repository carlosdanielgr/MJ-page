import { Component } from '@angular/core';
import { API_WHATSAPP } from '../../global.constant';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {
  API_WHATSAPP = API_WHATSAPP;
}
