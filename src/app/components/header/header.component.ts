import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  downloadPDF() {
    const link = document.createElement('a');
    link.href = 'assets/CV Héctor Eli Contreras Hernández.pdf';
    link.download = 'archivo.pdf'; 
    link.click();
  }
}