import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MenuPageRoutingModule } from './menu-routing.module';
import { MenuPage } from './menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPageRoutingModule,
    MenuPage // <--- AGGIUNGILO QUI NEGLI IMPORTS
  ],
  declarations: [] // <--- LASCIA QUESTO VUOTO (Togli MenuPage da qui)
})
export class MenuPageModule {}