import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor(private readonly http: HttpClient) {}

  postForm(body: Record<string, any>) {
    return this.http.post(
      'https://api.apispreadsheets.com/data/2iBojFUUel0Hzlwq/',
      body
    );
  }
}
