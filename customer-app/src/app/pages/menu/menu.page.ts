import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonicModule } from '@ionic/angular'; // Aggiungi questo
import { CommonModule } from '@angular/common'; // Aggiungi questo

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  standalone: true, // <--- DEVE ESSERE TRUE
  imports: [IonicModule, CommonModule] // <--- AGGIUNGI QUESTI
})
export class MenuPage implements OnInit {
  prodotti: any[] = [];
  carrello: any[] = [];
  nome: string | null = '';
  tavolo: string | null = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.nome = localStorage.getItem('cliente');
    this.tavolo = localStorage.getItem('tavolo');
    this.caricaMenu();
  }

  caricaMenu() {
    this.http.get('https://expert-memory-5g674jjr4qgwhp6q9-5000.app.github.dev/prodotti').subscribe((res: any) => {
      this.prodotti = res;
    });
  }

  aggiungi(p: any) {
    this.carrello.push(p.id);
    alert(p.nome + " aggiunto!");
  }

  inviaOrdine() {
    const ordine = {
      codice_tavolo: this.tavolo,
      nome_cliente: this.nome,
      prodotti: this.carrello
    };
    this.http.post('https://expert-memory-5g674jjr4qgwhp6q9-5000.app.github.dev/prodotti', ordine).subscribe(() => {
      alert("Ordine inviato!");
      this.carrello = [];
    });
  }
}