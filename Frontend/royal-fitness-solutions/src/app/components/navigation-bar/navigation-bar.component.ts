import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent {
  menuOpen: boolean = false;
  currentRoute: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  goToHome() {
    this.router.navigate(['/home']);
    this.toggleMenu();  // Close the menu after navigation
  }

  goToMeals() {
    this.router.navigate(['/meals']);
    this.toggleMenu();
  }

  goToTraining() {
    this.router.navigate(['/training']);
    this.toggleMenu();
  }

  goToContact() {
    this.router.navigate(['/contact']);
    this.toggleMenu();
  }
}
