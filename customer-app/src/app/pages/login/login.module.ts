import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginPageRoutingModule } from './login-routing.module';
import { LoginPage } from './login.page'; // Importa la classe

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    LoginPage // <--- AGGIUNGILO QUI NEGLI IMPORTS
  ],
  declarations: [] // <--- LASCIA QUESTO VUOTO (Togli LoginPage da qui)
})
export class LoginPageModule {}