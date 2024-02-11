import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{

  constructor (private apiService : ApiService) {}
  
  @Input() userName : any;

  data : any;
  imageURL : string = "";
  name : string = "";
  bio: string = "";
  publicRepos : number = 0;
  gitHub_link : string = "";

  ngOnInit(): void {
    if(this.userName != ""){
      this.apiService.getUser(this.userName).subscribe((profile) => {
        this.data = profile;

        this.imageURL = this.data.avatar_url;
        this.name = this.data.name;
        this.bio = this.data.bio;
        this.publicRepos = this.data.public_repos;
        this.gitHub_link = this.data.html_url;
      })
    }
  }

}
