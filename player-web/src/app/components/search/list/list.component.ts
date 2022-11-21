import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SongModel } from 'src/app/shared/models/song.model';
import { ServerService } from 'src/app/shared/services/server.service';
import { SpotifyPlayerService } from 'src/app/shared/services/spotify.player.service';

@Component({
  selector: 'player-search-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.sass'],
})
export class ListComponent implements OnInit, OnDestroy {
  token =
    'BQAvrZ0gVdOrpxDqdqCVLXxR60Ur0jnZyYwxvyomdiM_f87B56M-p_93gtY9WZ3zUUsXsdEjlqURMxur5ouY8ONJwb2mAlozjCl7do4IxW9DqMpkpPHtnqpONEufYVzFYRLomaECSZH4yi86f09w4IY346ekx8YaaQfyFHsxE0QBRvRErvOtCXpltE8cQ3MKkw';
  player!: typeof window.Spotify;
  deviceId: any;
  currentTrack: any;

  constructor(
    private serverService: ServerService,
    private spotifyPlayerService: SpotifyPlayerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.setupWebPlaybackSDK();
  }

  ngOnDestroy(): void {
    this.player.disconnect();
  }

  login(): void {
    this.serverService.login().subscribe((authUrl) => {
      console.log(authUrl);
      this.serverService.callback(authUrl).subscribe((res) => {
        console.log(res);
      });
    });
  }

  setupWebPlaybackSDK(): void {
    // Set up the Web Playback SDK
    const script = document.createElement('script');
    script.src = 'https://sdk.scdn.co/spotify-player.js';
    script.async = true;

    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {
      this.player = new window.Spotify.Player({
        name: 'Spotify x SoundCloud',
        getOAuthToken: (cb) => {
          cb(this.token);
        },
      });

      // Error handling
      this.player.on('initialization_error', (e) =>
        console.error('initialization_error: ' + e)
      );
      this.player.on('authentication_error', (e) =>
        console.error('authentication_error: ' + e)
      );
      this.player.on('account_error', (e) =>
        console.error('account_error: ' + e)
      );
      this.player.on('playback_error', (e) =>
        console.error('playback_error: ' + e)
      );
      this.player.on('autoplay_failed', (e) =>
        console.error('autoplay_failed: ' + e)
      );

      // Playback status updates
      this.player.on('player_state_changed', (state) => {
        console.log('player_state_changed: ' + state);
        this.currentTrack = state.track_window.current_track;
      });

      // Ready
      this.player.on('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);
        this.deviceId = device_id;
      });

      this.player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
      });

      // Connect to the player!
      this.player.connect();
    };
  }

  getCurrentState(): void {
    this.player.getCurrentState().then((state) => {
      if (!state) {
        console.error('User is not playing music through the Web Playback SDK');
        return;
      }

      var current_track = state.track_window.current_track;
      var next_track = state.track_window.next_tracks[0];

      console.log('Currently Playing', current_track);
      console.log('Playing Next', next_track);
    });
  }

  isPlaying(): boolean {
    this.player.getCurrentState().then((state) => {
      return state;
    });

    console.log('HÄR :(');
    return false;
  }

  togglePlay(): void {
    this.player.togglePlay();
  }

  getAvailableDevices(): void {
    this.spotifyPlayerService
      .getAvailableDevices(this.token)
      .subscribe((devices) => {
        console.log(devices);
      });
  }

  activateDevice(): void {
    this.spotifyPlayerService.activateDevice(this.token, this.deviceId);
  }
}
