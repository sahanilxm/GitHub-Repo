import { Component } from '@angular/core';

@Component({
  selector: 'app-repos-shimmer',
  templateUrl: './repos-shimmer.component.html',
  styleUrls: ['./repos-shimmer.component.scss']
})
export class ReposShimmerComponent {
  reposIteration: number[] = Array.from({length: 10}, (_, i) => i);
  tagIteration: number[] = Array.from({length: 5}, (_, i) => i);
}
