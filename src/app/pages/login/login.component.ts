import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [ReactiveFormsModule, CommonModule]
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage = '';

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    });
  }

  login() {
    const { username, password } = this.loginForm.value;
    this.http.post<any>('http://localhost:3000/login', { username, password }, { withCredentials: true })
      .subscribe({
        next: (response) => {
          console.log('Response dari server:', response);
          if (response.message === 'Login berhasil') {
            sessionStorage.setItem('user', JSON.stringify(response.user));
            console.log('Sebelum navigasi ke /pilih-tempat');
            this.router.navigate(['/pilih-tempat']).then(success => {
              console.log('Navigasi sukses:', success);
            });
          }
        },
        error: (error) => {
          console.error('Error login:', error);
          this.errorMessage = 'Login gagal. Periksa username atau password!';
        }
      });
  }
}
