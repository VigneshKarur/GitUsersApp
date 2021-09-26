import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css'],
})
export class RepositoriesComponent implements OnInit {
  @Input('repos') repoName: String;
  @Input('desc') repoDesc: String;
  @Input('tech') repoTechs: any;
  repo_techs: any;
  constructor() {}

  ngOnInit(): void {
    this.repo_techs = this.repoTechs.split(',');
  }
}
