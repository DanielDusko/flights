import {Component, OnInit} from '@angular/core';
import {Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sk-planes';
  isLoading = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((routerEvent: Event) => this.checkRouterEvent(routerEvent));
  }

  private checkRouterEvent(routerEvent: Event): void {
    if (routerEvent instanceof NavigationStart) {
      this.isLoading = true;
    } else if (routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError) {
      this.isLoading = false;
    }

  }
}
