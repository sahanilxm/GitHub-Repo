import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss']
})
export class ReposComponent implements OnInit, OnChanges{
  @Input() publicRepos: number = 0;
  @Input() userName: any;

  // Repos Details
  defaultPerPage: number = 10;
  maxPerPage: number = 100;
  currentPage: number = 1;
  perPage: number = this.defaultPerPage;
  totalPage: number = 1;
  searchKeyword: string = "";

  repos: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.fetchRepos(); // Assuming fetchRepos() function fetches repos based on initialized properties
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['publicRepos']) {
      this.publicRepos = changes['publicRepos'].currentValue;
      this.totalPage = Math.ceil(1.0 * this.publicRepos / this.perPage);
    }
  }
  

  fetchRepos() : void{
    from(this.apiService.getRepos(this.userName, this.searchKeyword, this.currentPage, this.perPage, this.maxPerPage, this.currentPage, this.totalPage)).subscribe((repos) => {
      this.repos = repos;
      console.log(this.repos);
      this.repos = this.repos.items;
    });
  }

  onSelectionChange(value : string) : void{
    this.perPage = parseInt(value);
    this.currentPage = 1;
    this.fetchRepos();
  }

  onPrev(){
    this.currentPage -= 1;
    this.fetchRepos();
  }

  onNext(){
    this.currentPage += 1;
    this.fetchRepos();
  }

  searchRepositories(){
    this.fetchRepos();
  }

}
