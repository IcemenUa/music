import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/share/service/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  albums$: Observable<any>;
  constructor(public musicApi: ApiService) { }

  ngOnInit(): void {
    this.getAlbums('rock')
  }

  getAlbums(genre: string): void {

    this.musicApi.getAlbums(genre).subscribe((res) =>
      this.albums$ = res.albums.album
    )

    console.log(this.albums$);
  }



}
