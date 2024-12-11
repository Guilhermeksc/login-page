import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-prazos',
  templateUrl: './prazos.component.html',
  styleUrls: ['./prazos.component.scss'],
  standalone: true,
  imports: [FormsModule , CommonModule], // Adicionar FormsModule aqui
})
export class PrazosComponent {
  searchTerm: string = '';
  selectedRow: any = null;

  rows = Array.from({ length: 20 }, (_, i) => ({
    numeroContrato: `CT-${i + 1}`,
    diasParaVencer: Math.floor(Math.random() * 365),
    objeto: `Objeto ${i + 1}`,
    empresa: `Empresa ${i + 1}`,
    tipo: i % 2 === 0 ? 'Serviço' : 'Produto',
  }));

  filteredRows = [...this.rows];

  buscar(): void {
    this.filteredRows = this.rows.filter((row) =>
      row.numeroContrato.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  atualizar(): void {
    this.filteredRows = [...this.rows];
    this.searchTerm = '';
    this.selectedRow = null;
  }

  mensagem(): void {
    if (this.selectedRow) {
      alert(`Enviando mensagem para o contrato: ${this.selectedRow.numeroContrato}`);
    } else {
      alert('Por favor, selecione uma linha antes de enviar uma mensagem.');
    }
  }

  selecionarLinha(row: any): void {
    this.selectedRow = row;
  }
}
