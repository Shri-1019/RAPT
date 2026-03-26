import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'dark';
export type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, RouterLink, LucideAngularModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'md';
  @Input() href?: string;
  @Input() icon?: any;
  @Input() disabled = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() fullWidth = false;
  
  @Output() clicked = new EventEmitter<Event>();

  get classes(): string {
    return `btn btn-${this.variant} btn-${this.size} ${this.fullWidth ? 'btn-full' : ''}`;
  }

  onClick(event: Event): void {
    if (!this.disabled) {
      this.clicked.emit(event);
    }
  }
}