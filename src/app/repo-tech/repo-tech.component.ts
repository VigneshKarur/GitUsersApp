import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-repo-tech',
  templateUrl: './repo-tech.component.html',
  styleUrls: ['./repo-tech.component.css'],
})
export class RepoTechComponent implements OnInit {
  @Input('tech') repoTech: string;
  constructor() {}

  ngOnInit(): void {}
}
