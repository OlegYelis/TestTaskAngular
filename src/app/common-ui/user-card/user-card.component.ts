import { Component, Input } from '@angular/core';
import { Result } from '../../data/interfaces/profile.interface';

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent {
  @Input() user!: Result;
}
