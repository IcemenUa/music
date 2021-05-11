import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/share/service/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  albums$;
  
  constructor(public musicApi: ApiService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAlbums(this.router.snapshot.paramMap.get('genre'))
  }

  getAlbums(genre: any): void {
    this.musicApi.getAlbums(genre).subscribe((res) =>
      this.albums$ = res.albums.album
    )
    console.log(this.albums$);
  };



}
