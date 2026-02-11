import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CmsService {
  private publicUrl = '/api/public/cms';
  private adminUrl = '/api/admin/cms';

  constructor(private http: HttpClient) {}

  getPage(pageKey: string): Observable<any> {
    return this.http.get<any>(`${this.publicUrl}/${pageKey}`);
  }

  savePage(page: any): Observable<any> {
    return this.http.post<any>(this.adminUrl, page);
  }
}
