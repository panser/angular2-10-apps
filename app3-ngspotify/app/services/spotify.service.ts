import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService{
  private searchUrl: string;
  private artistUrl: string;
  private albumsUrl: string;

  constructor(private _http:Http){

  }

  searchMusic(str:string, type='artist'){
    this.searchUrl = 'https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=20&type='+type+'&market=US';
    return this._http.get(this.searchUrl)
      .map(res => res.json());
  }

  getArtist(artistId:string){
    this.artistUrl = 'https://api.spotify.com/v1/artists/' + artistId;
    return this._http.get(this.artistUrl)
      .map(res => res.json());
  }

  getAlbums(artistId:string){
    this.albumsUrl = 'https://api.spotify.com/v1/artists/' + artistId + '/albums';
    return this._http.get(this.albumsUrl)
      .map(res => res.json());
  }

}

