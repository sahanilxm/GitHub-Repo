import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  totalRepos : number = 0;

  constructor(
    private httpClient: HttpClient
  ) { }

  getUser(githubUsername: string) {

    return this.httpClient.get(`https://api.github.com/users/${githubUsername}`);
  }


  getRepos(githubUsername: string, searchKeyword: string, page: number, perPage: number, maxPerPage: number){
    return this.httpClient.get(`https://api.github.com/search/repositories?q=${searchKeyword}+user:${githubUsername}&page=${page}&per_page=${Math.min(perPage, maxPerPage)}`);
  }

}
