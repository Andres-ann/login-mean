import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LoginData } from '../../models/auth.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginData: LoginData = {
    sub: '',
    email: '',
    password: '',
    name: '',
    code: '',
    showPassword: false,
  };

  alertMessage: string = '';
  showAlert: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.loginData).subscribe(
      (response) => {
        const token = response.token;
        localStorage.setItem('token', token);
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        this.displayAlert('Usuario o contraseña inválidos');
      }
    );
  }

  private displayAlert(message: string) {
    this.alertMessage = message;
    this.showAlert = true;
  }
}
