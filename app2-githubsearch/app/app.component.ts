import { Component } from '@angular/core';
import {GithubService} from './services/github.service';

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular App</h1><profile></profile>',
    providers: [GithubService],
})
export class AppComponent { }
