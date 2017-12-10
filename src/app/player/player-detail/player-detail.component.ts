import {Component, Input} from '@angular/core';

import {Player} from '../player.model';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent {

  @Input() player: Player;

  onSign(): void {

  }
}
