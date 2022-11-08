import { Component, OnInit } from '@angular/core';

import { SongModel } from 'src/app/shared/models/song.model';

@Component({
  selector: 'player-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass'],
})
export class SearchComponent implements OnInit {
  songs: Array<SongModel> = new Array<SongModel>();
  users: { name: string; title: string }[] = [
    { name: 'Carla Espinosa', title: 'Nurse' },
    { name: 'Bob Kelso', title: 'Doctor of Medicine' },
    { name: 'Janitor', title: 'Janitor' },
    { name: 'Perry Cox', title: 'Doctor of Medicine' },
    { name: 'Ben Sullivan', title: 'Carpenter and photographer' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
