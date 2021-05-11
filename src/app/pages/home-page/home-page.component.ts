import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ApiService } from '../../share/service/api.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  albums$: any;

  constructor(public musicApi: ApiService) { }


  ngOnInit(): void {
  }

  getAlbums(genre): void {

    this.musicApi.getAlbums(genre).subscribe((res) =>
      this.albums$ = res.albums.album
      )
    console.log(this.albums$);
  }





}

