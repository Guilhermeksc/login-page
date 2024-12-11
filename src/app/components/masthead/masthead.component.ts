import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-masthead',
  templateUrl: './masthead.component.html',
  styleUrls: ['./masthead.component.scss'],
})
export class MastheadComponent implements OnInit {
  constructor(private renderer: Renderer2, private router: Router) {}

  ngOnInit(): void {
    const videoElement = document.getElementById('mastheadVideo') as HTMLVideoElement;
    if (videoElement) {
      this.renderer.listen('window', 'click', () => {
        try {
          videoElement.play();
          console.log('Vídeo reproduzido com sucesso.');
        } catch (error) {
          console.error('Erro ao reproduzir o vídeo: ', error);
        }
      });
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
}
