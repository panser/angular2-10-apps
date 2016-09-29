import { Injectable }      from '@angular/core';
import { Http, Headers }      from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username: string;


    constructor(
        private _htto: Http
    ) {
        console.log('Github Service Ready...')
        this.username = 'bradtraversy';
    }

    getUser(){
        return this._htto.get('http://api.github.com/users/' + this.username)
            .map(res => res.json())
    }
}
