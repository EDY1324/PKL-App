import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DataDiriComponent } from './pages/data-diri/data-diri.component';
import { PilihTempatComponent } from './pages/pilih-tempat/pilih-tempat.component';
import { AuthGuard } from './guards/auth.guard';
import { InfoTempatComponent } from './pages/info-tempat/info-tempat.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'data-diri', component: DataDiriComponent, canActivate: [AuthGuard] },
  { path: 'pilih-tempat', component: PilihTempatComponent, canActivate: [AuthGuard]},
  { path: 'info-tempat', component: InfoTempatComponent, canActivate: [AuthGuard]}
];
