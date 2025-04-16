import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.page.html',
  styleUrls: ['./recuperar-contrasena.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class RecuperarContrasenaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
