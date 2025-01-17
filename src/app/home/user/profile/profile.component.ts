import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss', '../../../../styles.scss']
})
export class ProfileComponent{

  constructor () {}

  @Input() imageURL : any;
  @Input() name : any;
  @Input() bio: any
  @Input() publicRepos : any;
  @Input() gitHub_link : any;

}
