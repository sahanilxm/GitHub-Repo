import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  userName : String = "";


  onSearch(){
    console.log('Username provided: ', this.userName);
  }

}
