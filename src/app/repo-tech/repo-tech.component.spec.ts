import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoTechComponent } from './repo-tech.component';

describe('RepoTechComponent', () => {
  let component: RepoTechComponent;
  let fixture: ComponentFixture<RepoTechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepoTechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
