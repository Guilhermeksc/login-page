import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class DashComponent {
  public totalContratos: number = 125;
  public totalAtas: number = 58;
  public statusPregao = [
    { status: 'Aberto', quantidade: 12 },
    { status: 'Encerrado', quantidade: 20 },
    { status: 'Em Análise', quantidade: 8 },
  ];
  public prazoVigencia = [
    { contrato: 'Contrato A', diasRestantes: 120 },
    { contrato: 'Contrato B', diasRestantes: 45 },
    { contrato: 'Contrato C', diasRestantes: 10 },
  ];
  public sessoesPublicas = [
    { pregao: 'Pregão 01/2024', horario: '10:00', data: '15/12/2024' },
    { pregao: 'Pregão 02/2024', horario: '14:00', data: '16/12/2024' },
  ];
}
