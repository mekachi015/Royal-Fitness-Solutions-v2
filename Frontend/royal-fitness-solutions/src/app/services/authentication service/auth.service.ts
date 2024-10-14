import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthResponse } from 'src/app/entities/Authentication Response/AuthResponse';
import { LoginRequest } from 'src/app/entities/Login Request/LoginRequest';
import { RegisterRequest } from 'src/app/entities/Register Request/RegisterRequest';
import { enviroment } from 'src/app/enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string | null = null;
  private authStatusListener = new BehaviorSubject<boolean>(false);
  private apiBaseUrl = enviroment.apiURL;
  private userId: number | null = null; // Add a userId field

  constructor(private http: HttpClient) {}

  // Register method
  register(registerRequest: RegisterRequest): Observable<AuthResponse> {
    const url = `${this.apiBaseUrl}/register`;
    return this.http.post<AuthResponse>(url, registerRequest);
  }

  // Login method
  login(loginRequest: LoginRequest): Observable<AuthResponse> {
    const url = `${this.apiBaseUrl}/authenticate`;
    return this.http.post<AuthResponse>(url, loginRequest);
  }

  // Store user data on login
  loginUser(email: string, token: string): void {
    localStorage.setItem('loggedInUserEmail', email);
    localStorage.setItem('token', token);
    this.token = token;
    this.userId = this.extractUserIdFromToken(token); // Set userId here
    this.authStatusListener.next(true);
  }

  // Logout and clear localStorage
  logout(): void {
    localStorage.removeItem('loggedInUserEmail');
    localStorage.removeItem('token');
    this.token = null;
    this.userId = null; // Clear userId on logout
    this.authStatusListener.next(false);
  }

  // Check if the user is authenticated
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  // Get the token from localStorage
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Get user email from localStorage
  getLoggedInUserEmail(): string | null {
    return localStorage.getItem('loggedInUserEmail');
  }

  // Listen to authentication status
  getAuthStatusListener(): Observable<boolean> {
    return this.authStatusListener.asObservable();
  }

  // Initialize authentication from localStorage
  initAuth(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.token = token;
      this.userId = this.extractUserIdFromToken(token); // Initialize userId
      this.authStatusListener.next(true);
    } else {
      this.authStatusListener.next(false);
    }
  }
  

  getUserById(userId: number): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(`${this.apiBaseUrl}/user/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  getUserId(): number | null {
    return this.userId;
  }

  private extractUserIdFromToken(token: string): number | null {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      console.log('Decoded Payload:', payload);
      return payload.userId || null; // Adjust based on actual token structure
    } catch (error) {
      console.error('Error parsing token:', error);
      return null;
    }
  }
}
