import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SpotifyEndPointController } from '../constants/endpoint-controller.enum';

@Injectable()
export class SpotifyPlayerService {
  private url = `${SpotifyEndPointController.api}/${SpotifyEndPointController.player}`;

  constructor(private http: HttpClient) {}

  getAvailableDevices(accessToken: string) {
    const route = '/devices';
    const url = this.url + route;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: `Bearer ${accessToken}`,
    });

    return this.http.get(url, { headers });
  }

  activateDevice(accessToken: string, deviceId: string) {
    const url = this.url;
    const body = JSON.stringify({ device_ids: [deviceId], play: true });
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: `Bearer ${accessToken}`,
    });

    return this.http.put(url, body, { headers });
  }
}
