import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  standalone: true,
  imports: [FormsModule , CommonModule], // Adicionar FormsModule aqui
})
export class ChatComponent {
  messages = [
    { sender: 'Alice', content: 'Olá, como posso ajudar?', timestamp: '10:30 AM' },
    { sender: 'Você', content: 'Gostaria de saber mais sobre o projeto.', timestamp: '10:31 AM' },
  ];
  
  newMessage: string = '';

  sendMessage(): void {
    if (this.newMessage.trim()) {
      this.messages.push({
        sender: 'Você',
        content: this.newMessage.trim(),
        timestamp: new Date().toLocaleTimeString(),
      });
      this.newMessage = '';
    }
  }
}
