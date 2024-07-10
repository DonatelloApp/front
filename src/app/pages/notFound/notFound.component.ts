import { Component } from '@angular/core';
import { RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-notFound',
  imports: [RouterLinkActive, RouterModule],
  templateUrl: './notFound.component.html',
  styleUrls: ['./notFound.component.scss']
})
export class NotFoundComponent {

}
