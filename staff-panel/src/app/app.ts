import { Component } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DashboardComponent], // Ho tolto RouterOutlet così non hai più il warning
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'staff-panel';
}