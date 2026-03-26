import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { LucideAngularModule, ArrowRight, CreditCard, FileText, BarChart3, Headphones, MapPin, Users, DollarSign, CheckCircle } from 'lucide-angular';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterLink, ButtonComponent, LucideAngularModule],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  // Icons
  readonly ArrowRight = ArrowRight;
  readonly CreditCard = CreditCard;
  readonly FileText = FileText;
  readonly BarChart3 = BarChart3;
  readonly Headphones = Headphones;
  readonly MapPin = MapPin;
  readonly Users = Users;
  readonly DollarSign = DollarSign;
  readonly CheckCircle = CheckCircle;

  features = [
    {
      icon: CreditCard,
      title: 'Precision Payment\nTracking',
      description: 'Automated ledgers that capture every cent. Zero delays, full transparency for both parties.',
      color: '#FF4E50'
    },
    {
      icon: FileText,
      title: 'Seamless\nAgreement\nManagement',
      description: 'Digital signatures and version control that feel like high-end editorial archives.',
      color: '#825100'
    },
    {
      icon: BarChart3,
      title: 'Editorial-Grade\nAnalytics',
      description: 'Visualize your portfolio yield with the clarity of a premium financial publication.',
      color: '#2D3436'
    },
    {
      icon: Headphones,
      title: '24/7 Maintenance\nSupport',
      description: 'Rapid-response routing for property repairs, keeping tenant satisfaction at peak levels.',
      color: '#904d00'
    }
  ];

  stats = [
    { value: '12k+', label: 'Active Leases' },
    { value: '99.9%', label: 'Secure Trust' }
  ];
}