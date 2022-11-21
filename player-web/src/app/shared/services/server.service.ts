import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ServerEndPointController } from '../constants/endpoint-controller.enum';

@Injectable()
export class ServerService {
  private url = `${ServerEndPointController.api}`;

  constructor(private http: HttpClient) {}

  login() {
    const route = '/login';
    const url = this.url + route;

    return this.http.get<string>(url);
  }

  callback(authUrl: string) {
    const route = '/callback';
    const url = this.url + route;

    return this.http.post(url, authUrl);
  }
}
