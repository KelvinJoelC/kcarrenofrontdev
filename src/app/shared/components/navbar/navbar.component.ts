import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.fragment.subscribe((fragment: any) => {
      console.log('fragmaen', fragment)
      if (fragment) {
        const element = document.querySelector(`#${fragment}`);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}
