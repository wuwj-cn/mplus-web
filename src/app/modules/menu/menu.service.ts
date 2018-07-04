import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Result } from '../../core/result';


@Injectable()
export class MenuService {

  private menuUrl = 'api/menu';  // URL to web api

  constructor(private http: HttpClient) { }

  saveMenu(value) {
    const url = `${this.menuUrl}/add`;
    this.http.post<Result>(url, value).subscribe();
  }
}
