import { Component } from '@angular/core';
import { LoginRequest } from 'src/app/entities/Login Request/LoginRequest';
import { RegisterRequest } from 'src/app/entities/Register Request/RegisterRequest';
import { AuthService } from 'src/app/services/authentication service/auth.service';

@Component({
  selector: 'app-authentication-form',
  templateUrl: './authentication-form.component.html',
  styleUrls: ['./authentication-form.component.scss']
})
export class AuthenticationFormComponent {
  loginRequest: LoginRequest = { email: '', password: '' };
  registerRequest: RegisterRequest = { firstName: '', lastName: '', email: '', cell_number: '', password: '' };

  constructor(private authService: AuthService) {}

  // Method to handle user login
  onLogin(): void {
    this.authService.login(this.loginRequest).subscribe(
      (response) => {
        console.log('Login successful', response);
        this.authService.loginUser(this.loginRequest.email, response.token);
      },
      (error) => {
        console.error('Login failed', error);
      }
    );
  }

  // Method to handle user registration
  onRegister(): void {
    this.authService.register(this.registerRequest).subscribe(
      (response) => {
        console.log('Registration successful', response);
      },
      (error) => {
        console.error('Registration failed', error);
      }
    );
  }

  showLogin: boolean = true; // Default to show login form

  // Toggle between login and register forms
  toggleForms() {
    this.showLogin = !this.showLogin;
  }
}
