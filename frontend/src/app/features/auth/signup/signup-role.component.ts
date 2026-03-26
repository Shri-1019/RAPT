import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { LucideAngularModule, Building2, Home, ArrowRight } from 'lucide-angular';

@Component({
  selector: 'app-signup-role',
  standalone: true,
  imports: [RouterLink, ButtonComponent, LucideAngularModule],
  templateUrl: './signup-role.component.html',
  styleUrls: ['./signup-role.component.scss']
})
export class SignupRoleComponent {
  readonly Building2 = Building2;
  readonly Home = Home;
  readonly ArrowRight = ArrowRight;

  constructor(private router: Router) {}

  selectRole(role: 'landlord' | 'tenant') {
    this.router.navigate(['/auth/signup', role]);
  }
}