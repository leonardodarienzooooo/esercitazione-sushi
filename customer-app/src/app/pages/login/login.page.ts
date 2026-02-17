import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage {
  nomeCliente: string = '';
  codiceTavolo: string = '';

  constructor(private router: Router) {}

  entra() {
    if (this.nomeCliente && this.codiceTavolo) {
      localStorage.setItem('cliente', this.nomeCliente);
      localStorage.setItem('tavolo', this.codiceTavolo);
      this.router.navigate(['/menu']);
    } else {
      alert("Per favore, inserisci sia il nome che il tavolo!");
    }
  }
}