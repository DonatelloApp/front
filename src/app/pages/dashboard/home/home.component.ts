import { Component, inject, OnInit } from '@angular/core';
import { NavbarComponent } from 'src/app/components/layout/navbar/navbar.component';
import { SidebarComponent } from 'src/app/components/layout/sidebar/sidebar.component';
import { EarningsResumeComponent } from 'src/app/components/specific/earnings-resume/earnings-resume.component';
import { ExpensesResumeComponent } from 'src/app/components/specific/expenses-resume/expenses-resume.component';
import { RevenueResumeComponent } from 'src/app/components/specific/revenue-resume/revenue-resume.component';
import { WelcomeCardComponent } from 'src/app/components/specific/welcome-card/welcome-card.component';
import { LoginService } from 'src/app/core/services/login.service';
import { UserProfileService } from 'src/app/core/services/userProfile.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, SidebarComponent, WelcomeCardComponent, RevenueResumeComponent, ExpensesResumeComponent, EarningsResumeComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private loginService = inject(LoginService);
  private userProfileService = inject(UserProfileService);
  userLoginOn: boolean = false;

  companyName: string | undefined = undefined;
  revenue: string | undefined = undefined;
  expenses: string | undefined = undefined;
  earnings: string | undefined = undefined;
  errorMessage: String = '';

  constructor() {}

  ngOnInit() {
    this.loginService.userLoginOn.subscribe({
      next: (userData) => {
        this.userLoginOn = userData;
      },
    });
    this.userProfileService.getUserProfile().subscribe({
      next: (userData) => {
        this.companyName = userData.companyName;
      },
      error: (errorData) => {
        this.errorMessage = errorData;
      },
      complete: () => {
        console.info('User Profile Data ok');
      },
    });
    this.revenue = '1.000.000';
    this.expenses = '50.000';
    this.earnings = '950.000';
  }
}
