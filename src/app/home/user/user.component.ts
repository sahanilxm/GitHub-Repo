import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  userName : string = "";

  constructor(private route : ActivatedRoute) {}

  ngOnInit() : void {
    this.route.params.subscribe(params => {
      this.userName = params['name'];
      console.log(this.userName);
    })
  }
}
