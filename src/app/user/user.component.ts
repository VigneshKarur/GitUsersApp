import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  @Input('name') username: string;
  @Input('bio') bio: string;
  @Input('location') location: string;
  @Input('twitter') twitter: string;
  @Input('url') url: string;
  @Input('img') img: string;

  constructor() {}

  ngOnInit(): void {}
}
