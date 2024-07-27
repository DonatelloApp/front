import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-revenue-resume',
  standalone: true,
  templateUrl: './revenue-resume.component.html',
  styleUrls: ['./revenue-resume.component.scss'],
})
export class RevenueResumeComponent {
  @Input() revenue: string | undefined;
}
