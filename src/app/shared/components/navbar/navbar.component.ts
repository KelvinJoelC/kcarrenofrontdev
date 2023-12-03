import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  
  @Output() changeLenguage: EventEmitter<string> = new EventEmitter<string>();

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.fragment.subscribe((fragment: any) => {
      if (fragment) {
        const element = document.querySelector(`#${fragment}`);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}
