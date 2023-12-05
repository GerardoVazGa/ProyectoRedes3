import { Component } from '@angular/core';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrl: './cuerpo.component.css'
})
export class CuerpoComponent {
  userPassword: string = ''; // Variable para almacenar la contraseña
  hidePassword: boolean = true; // Variable para controlar la visibilidad de la contraseña

  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }
}
