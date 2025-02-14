import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-diri',
  templateUrl: './data-diri.component.html',
  styleUrl: './data-diri.component.css',
  imports: [CommonModule, FormsModule]
})
export class DataDiriComponent {
  ngOnInit() {
    const storedPlaceId = sessionStorage.getItem('selectedPlaceId');
    if (storedPlaceId) {
      this.formData.placeId = parseInt(storedPlaceId, 10);
    }
  }
  
  formData = {
    fullName: '',
    email: '',
    phone: '',
    placeId: 2,
    resume: ''
  };

  constructor(private http: HttpClient, private router: Router) {}

  submitApplication() {
    console.log('Data yang dikirim:', this.formData);
    this.http.post('http://localhost:3000/apply', this.formData, { withCredentials: true })
      .subscribe({
        next: (response) => {
          this.router.navigate(['/pilih-tempat'])
        },
        error: (error) => {
          console.error('Gagal mengajukan magang:', error);
        }
      });
  }
}