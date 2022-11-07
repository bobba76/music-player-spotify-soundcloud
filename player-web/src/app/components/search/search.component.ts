import { Component, OnInit } from '@angular/core';

import { SongModel } from 'src/app/shared/models/song.model';

@Component({
  selector: 'player-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass'],
})
export class SearchComponent implements OnInit {
  songs: Array<SongModel> = new Array<SongModel>();

  constructor() {}

  ngOnInit(): void {}
}
