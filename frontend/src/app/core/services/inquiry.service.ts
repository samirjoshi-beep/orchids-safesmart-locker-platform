import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InquiryService {
  constructor(private http: HttpClient) {}

  submitInquiry(inquiry: any): Observable<any> {
    return this.http.post<any>('/api/public/inquiry', inquiry);
  }

  // Future: Admin methods for viewing inquiries
}
