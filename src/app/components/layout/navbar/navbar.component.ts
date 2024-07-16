import { NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import {Router, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLinkActive, RouterModule, RouterOutlet, NgIf],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  userLoginOn:boolean=false;
  private loginService = inject(LoginService);
  private router = inject(Router);
  currentRoute: string = '';

  constructor(){
    this.currentRoute = this.router.url;
  }
  
  ngOnInit(): void{
    this.loginService.currentUserLoginOn.subscribe({
      next:(userLoginOn)=>{
        this.userLoginOn=userLoginOn;
      }
    })
  }

  isRoute(routeName: string): boolean {
    return this.currentRoute === routeName;
  }

  logOut(){
    this.loginService.logOut();
    this.router.navigateByUrl("/");
  }
}
