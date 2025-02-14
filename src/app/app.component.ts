import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ReactiveFormsModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private http: HttpClient, private router: Router) {}

  logout() {
    this.http.post('http://localhost:3000/logout', {}, { withCredentials: true })
      .subscribe({
        next: () => this.router.navigate(['/login']),
        error: () => alert('Logout gagal!')
      });
  }
}
