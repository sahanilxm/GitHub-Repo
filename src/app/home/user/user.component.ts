import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  userName : string = "";
  data : any;

  // Profile Details
  imageURL : string = "";
  name : string = "";
  bio: string = "";
  publicRepos : number = 0;
  gitHub_link : string = "";


  constructor(private route : ActivatedRoute, private apiService : ApiService) {}

  ngOnInit() : void {
    this.route.params.subscribe(params => {
      this.userName = params['name'];
      console.log(this.userName);
      this.apiService.getUser(this.userName).subscribe((profile) => {
        this.data = profile;

        this.imageURL = this.data.avatar_url;
        this.name = this.data.name;
        this.bio = this.data.bio;
        this.publicRepos = this.data.public_repos;
        this.gitHub_link = this.data.html_url;
      })
    })
  }

}
