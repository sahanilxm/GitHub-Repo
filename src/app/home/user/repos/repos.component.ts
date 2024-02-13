import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss']
})
export class ReposComponent implements OnInit{
  @Input() publicRepos : any;
  @Input() userName : any;

  // Repos Details
  defaultPerPage : number = 10;
  maxPerPage : number = 100;
  currentPage : number = 1;
  perPage : number = this.defaultPerPage;
  totalPage : number = 0;
  searchKeyword : string = "";

  repos : any;


  constructor(private apiService : ApiService) {}

  ngOnInit() : void {
    this.fetchRepos();
  }

  fetchRepos() : void{
    console.log(this.publicRepos);
    this.totalPage = Math.ceil(1.0 * this.publicRepos / this.perPage);
    from(this.apiService.getRepos(this.userName, this.searchKeyword, this.currentPage, this.perPage, this.maxPerPage)).subscribe((repos) => {
      this.repos = repos;
      console.log(this,repos);
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

}
