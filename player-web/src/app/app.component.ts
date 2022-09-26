import { Component } from '@angular/core';
import { Song } from './models/song/song.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  songs: Array<Song> = new Array<Song>();
}
