import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-tempat',
  templateUrl: './info-tempat.component.html',
  styleUrls: ['./info-tempat.component.css'],
  imports: [CommonModule]
})
export class InfoTempatComponent implements OnInit {
  tempat: any;
  students: any[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const tempatId = params['tempat'];

      this.http.get<any>(`http://localhost:3000/places/${tempatId}`).subscribe(
        (data) => this.tempat = data,
        (error) => console.error('Error fetching tempat PKL', error)
      );

      this.http.get<any[]>(`http://localhost:3000/students/${tempatId}`).subscribe(
        (data) => this.students = data,
        (error) => console.error('Error fetching students', error)
      );
    });
  }

  pilihTempat() {
    this.http.post('http://localhost:3000/places', { tempatId: this.tempat.id }, { withCredentials: true })
      .subscribe(
        () => this.router.navigate(['/data-diri']),
        (error) => console.error('Gagal memilih tempat PKL', error)
      );
  }
}
