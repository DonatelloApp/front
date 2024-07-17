import { Component, inject, OnInit } from "@angular/core";
import { NavbarComponent } from "src/app/components/layout/navbar/navbar.component";
import { SidebarComponent } from "src/app/components/layout/sidebar/sidebar.component";


@Component({
    selector: 'app-in-progress',
    standalone: true,
    imports: [
      NavbarComponent,
      SidebarComponent,
    ],
    templateUrl: './in-progress.component.html',
    styleUrls: ['./in-progress.component.scss'],
  })

  export class InProgressComponent{
  
    constructor() {}
  
  }
  