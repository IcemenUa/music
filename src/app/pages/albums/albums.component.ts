import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/share/service/api.service';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../../share/models/album.model';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  liked = true
  likedAlbums;
  albums$;

  constructor(public musicApi: ApiService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAlbums(this.router.snapshot.paramMap.get('genre'))
  }

  private getAlbums(genre: string): void {

    this.musicApi.getAlbums(genre).subscribe(
      (res) =>
        this.albums$ = res.albums.album
    )


  };
  likeToggle(): void {
    console.log('click');

  }


  cardLog() {
    console.log(this.albums$);

  }

}
