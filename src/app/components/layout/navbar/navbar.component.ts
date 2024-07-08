import { NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import {RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { LoginService } from 'src/app/service/auth/login.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLinkActive, RouterModule, RouterOutlet, NgIf],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  userLoginOn:boolean=false;
  private loginService = inject(LoginService)
  
  ngOnInit(): void{
    this.loginService.currentUserLoginOn.subscribe({
      next:(userLoginOn)=>{
        this.userLoginOn=userLoginOn;
      }
    })
  }
}
