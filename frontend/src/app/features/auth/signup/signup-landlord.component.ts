import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { LucideAngularModule, Building2, ArrowLeft, Mail, Lock, User, Phone } from 'lucide-angular';

@Component({
  selector: 'app-signup-landlord',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, ButtonComponent, LucideAngularModule],
  templateUrl: './signup-landlord.component.html',
  styleUrls: ['./signup-landlord.component.scss']
})
export class SignupLandlordComponent {
  readonly Building2 = Building2;
  readonly ArrowLeft = ArrowLeft;
  readonly Mail = Mail;
  readonly Lock = Lock;
  readonly User = User;
  readonly Phone = Phone;

  formData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  };

  isLoading = false;
  errorMessage = '';

  constructor(private router: Router) {}

  onSubmit() {
    // Validation
    if (!this.formData.firstName || !this.formData.lastName) {
      this.errorMessage = 'Please enter your full name';
      return;
    }

    if (!this.formData.email) {
      this.errorMessage = 'Please enter your email';
      return;
    }

    if (!this.formData.phone) {
      this.errorMessage = 'Please enter your phone number';
      return;
    }

    if (!this.formData.password) {
      this.errorMessage = 'Please enter a password';
      return;
    }

    if (this.formData.password !== this.formData.confirmPassword) {
      this.errorMessage = 'Passwords do not match';
      return;
    }

    if (this.formData.password.length < 8) {
      this.errorMessage = 'Password must be at least 8 characters';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    // Simulate API call
    setTimeout(() => {
      this.isLoading = false;
      // Redirect to login or dashboard
      this.router.navigate(['/auth/login']);
    }, 1500);
  }

  get passwordStrength(): string {
    const password = this.formData.password;
    if (!password) return '';
    
    if (password.length < 8) return 'Weak';
    if (password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)) return 'Strong';
    if (password.match(/^(?=.*[a-z])(?=.*[A-Z])/)) return 'Medium';
    return 'Weak';
  }

  get strengthColor(): string {
    const strength = this.passwordStrength;
    if (strength === 'Strong') return '#10B981';
    if (strength === 'Medium') return '#F59E0B';
    if (strength === 'Weak') return '#EF4444';
    return '#e2e9ec';
  }
}