import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor(private readonly http: HttpClient) {}

  sendEmail(body: { subject: string; to: string; type?: 'zafu' }) {
    return this.http.post('http://localhost:3000/send-email', body);
  }
}
