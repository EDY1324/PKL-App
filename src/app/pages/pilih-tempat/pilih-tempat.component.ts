import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pilih-tempat',
  standalone: true,
  templateUrl: './pilih-tempat.component.html',
  styleUrls: ['./pilih-tempat.component.css'],
  imports: [CommonModule]
})
export class PilihTempatComponent implements OnInit {
  tempatPKL: any[] = [];
  selectedTempat: any = null;
tempatPkl: any;

constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.loadTempatPKL();
  }

  loadTempatPKL() {
    this.tempatPKL = [];
    this.http.get<any[]>('http://localhost:3000/places').subscribe(
      (data) => {
        this.tempatPKL = data;
      },
      (error) => {
        console.error('Error loading tempat PKL', error);
      }
    );
  }
  
  

  pilihTempat(tempat: any) {
    if (this.selectedTempat && this.selectedTempat.id === tempat.id) {
      alert('Tempat sudah dipilih!');
      return;
    }
  
    console.log('Tempat yang dipilih:', tempat);
    this.selectedTempat = tempat;
  
    this.http.post('http://localhost:3000/places', 
      { tempatId: tempat.id }, 
      { withCredentials: true })
    .subscribe(
      () => {
        this.router.navigate(['/info-tempat'], { queryParams: { tempat: tempat.id } });
      },
      (error) => {
        console.error('Gagal memilih tempat PKL', error);
      }
    );
  }
}
