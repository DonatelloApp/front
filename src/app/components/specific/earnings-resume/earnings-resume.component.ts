import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-earnings-resume',
  standalone: true,
  templateUrl: './earnings-resume.component.html',
  styleUrls: ['./earnings-resume.component.scss']
})
export class EarningsResumeComponent {
  @Input() earnings: string | undefined;
}
