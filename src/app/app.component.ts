import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyectoRedes';
  isLoggedIn: boolean;
  

  constructor(private cookieService: CookieService) {
    this.isLoggedIn = this.checkLoginStatus();
  }

  checkLoginStatus(): boolean {
    const tokenExists = this.cookieService.check('authToken');
    return tokenExists;
  }

  handleLogin(success: boolean) {
    if (success) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }

  handleLogout() {
    this.isLoggedIn = false;
  }
}
