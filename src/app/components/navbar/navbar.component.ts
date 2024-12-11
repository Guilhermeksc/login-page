import { Component, HostListener, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isMenuOpen = false; // Controla a abertura e fechamento
  isHidden = false; // Controla a visibilidade da navbar
  isScrollingUp = false; // Controla a cor do fundo da navbar
  lastScrollTop = 0; // Armazena a última posição do scroll

  @ViewChild('navbarResponsive', { static: false }) navbarResponsive!: ElementRef;

  constructor(private router: Router) {}

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const currentScroll = window.pageYOffset;

    if (currentScroll > this.lastScrollTop) {
      // Rolando para baixo
      this.isHidden = true;
      this.isScrollingUp = false;
    } else if (currentScroll < this.lastScrollTop) {
      // Rolando para cima
      this.isHidden = false;
      this.isScrollingUp = true;
    }

    this.lastScrollTop = Math.max(0, currentScroll); // Evita valores negativos
  }

  toggleMenu(): void {
    if (this.navbarResponsive) {
      this.isMenuOpen = !this.isMenuOpen;
      console.log('Menu aberto:', this.isMenuOpen);
    } else {
      console.error('Elemento navbarResponsive não encontrado.');
    }
  }

  navigateToLogin(): void {
    this.router.navigate(['/login']).then((success) => {
      if (success) {
        console.log('Navegação para /login bem-sucedida');
      } else {
        console.error('Erro ao navegar para /login');
      }
    });
  }
  closeMenu(): void {
    this.isMenuOpen = false; // Fecha o menu
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse) {
      navbarCollapse.classList.remove('show'); // Remove a classe 'show' para esconder o menu
    }
  }
}