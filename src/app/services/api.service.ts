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

  async getUser(githubUsername: string) {
    try {
      const data = await this.httpClient.get<any>(`https://api.github.com/users/${githubUsername}`).toPromise();
      return data;
    } catch (error) {
      console.error('Error fetching user data:', error);
      throw error;
    }
  }


  async getRepos(githubUsername: string, searchKeyword: string, page: number, perPage: number, maxPerPage: number){
    try {
      const url = `https://api.github.com/search/repositories?q=${searchKeyword}+user:${githubUsername}&page=${page}&per_page=${Math.min(perPage, maxPerPage)}`;
      const data = await this.httpClient.get<any>(url).toPromise();
      return data;
    } catch (error) {
      console.error('Error searching repositories:', error);
      throw error;
    }
  }

}
