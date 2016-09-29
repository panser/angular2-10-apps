import {Injectable}      from '@angular/core';
import {Http, Headers}      from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username: string;
  private client_id = '1b31ef434552c485176a';
  private client_secret = 'cbef491fccd206aeb12f97602c04047d3133af85';

  constructor(private _htto: Http) {
    console.log('Github Service Ready...')
    this.username = 'panser';
  }

  getUser() {
    return this._htto.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
      .map(res => res.json())
  }

  getRepos() {
    return this._htto.get('http://api.github.com/users/' + this.username + '/repos' + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
      .map(res => res.json())
  }

  updateUser(username: string){
    this.username = username;
  }
}
