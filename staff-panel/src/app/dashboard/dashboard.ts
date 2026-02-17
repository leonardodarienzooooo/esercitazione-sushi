import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html', // <--- ASSICURATI CHE IL NOME SIA UGUALE AL FILE NELLA CARTELLA
  styleUrl: './dashboard.css'
})
export class DashboardComponent implements OnInit {
  ordini: any[] = [];
  // USA L'URL DELLA TUA PORTA 5000 (BACKEND)
  apiUrl = 'https://TUO-URL-5000.app.github.dev'; 

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.caricaOrdini();
    setInterval(() => this.caricaOrdini(), 5000);
  }

  caricaOrdini() {
    this.http.get(this.apiUrl + '/ordini').subscribe((res: any) => {
      this.ordini = res;
    });
  }

  cambiaStato(id: number, nuovoStato: string) {
    this.http.put(this.apiUrl + '/ordini/' + id, { stato: nuovoStato }).subscribe(() => {
      this.caricaOrdini();
    });
  }
}