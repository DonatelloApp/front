import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-expenses-resume',
  standalone: true,
  templateUrl: './expenses-resume.component.html',
  styleUrls: ['./expenses-resume.component.scss']
})
export class ExpensesResumeComponent {
  @Input() expenses: string | undefined;
}
