import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-welcome-card',
  standalone: true,
  templateUrl: './welcome-card.component.html',
  styleUrls: ['./welcome-card.component.scss'],
})
export class WelcomeCardComponent {
  @Input() companyName: string | undefined;

  getCurrentDate(): string {
    return new Date().toLocaleDateString();
  }
}
