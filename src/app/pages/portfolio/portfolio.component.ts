import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, HomeComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

}
