import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { LucideAngularModule, Mail, Lock, ArrowRight, Home, Building2, CreditCard, FileText } from 'lucide-angular';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, ButtonComponent, LucideAngularModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  readonly Mail = Mail;
  readonly Lock = Lock;
  readonly ArrowRight = ArrowRight;
  readonly Home = Home;
  readonly Building2 = Building2;
  readonly CreditCard = CreditCard;
  readonly FileText = FileText;

  role: 'landlord' | 'tenant' = 'landlord';
  email = '';
  password = '';
  rememberMe = false;
  isLoading = false;
  errorMessage = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (!this.email || !this.password) {
      this.errorMessage = 'Please enter both email and password';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    // Simulate API call
    setTimeout(() => {
      this.isLoading = false;
      // For demo purposes, just redirect based on role
      if (this.role === 'landlord') {
        this.router.navigate(['/landlord']);
      } else {
        this.router.navigate(['/tenant']);
      }
    }, 1000);
  }

  loginWithGoogle() {
    // Implement Google OAuth
    console.log('Login with Google');
  }

  loginWithApple() {
    // Implement Apple OAuth
    console.log('Login with Apple');
  }
}