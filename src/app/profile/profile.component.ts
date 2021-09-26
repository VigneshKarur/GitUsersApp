import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  repos: any;
  img: any;
  username: any;
  bio: any;
  location: any;
  url: any;
  twitter: any;
  descs: any;
  tech: any;
  total: any;
  error: boolean;
  page: number = 1;
  constructor(private http: HttpClient) {}
  async Search(input: HTMLInputElement) {
    this.repos = [];
    this.descs = [];
    this.tech = [];
    this.img = '';
    this.username = '';
    this.bio = '';
    this.location = '';
    this.url = '';
    this.twitter = '';
    this.error = false;
    let product = input.value.replace(/\s/g, '');
    const response: any = await this.http
      .get('https://api.github.com/users/' + product + '/repos')
      .toPromise()
      .catch((err) => {
        this.error = true;
      });

    const res: any = await this.http
      .get('https://api.github.com/users/' + product)
      .toPromise();
    //For collecting all repositories
    const size = Object.keys(response).length;
    for (let i = 0; i < size; i++) {
      const resp: any = await this.http
        .get(
          'https://api.github.com/repos/' + response[i].full_name + '/languages'
        )
        .toPromise();
      // For the Technology tags of the repository
      this.tech.push(Object.keys(resp));

      // For the Repository name
      this.repos.push(response[i].name);

      //For the description of the repositories
      if (response[i].description != null)
        this.descs.push(response[i].description);
      else this.descs.push('No description found');
    }

    //For Collecting the UserData
    this.img = res.avatar_url;
    this.username = res.name;
    this.bio = res.bio;
    this.location = res.location;
    this.url = res.html_url;
    this.twitter = 'Twitter: https://twitter.com/' + res.twitter_username;
    this.total = this.descs.length;
    console.log(this.error);
  }
}
