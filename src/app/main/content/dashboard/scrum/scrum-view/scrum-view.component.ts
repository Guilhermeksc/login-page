import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Task {
  userId: string;
  description: string;
  important?: boolean;
  bug?: boolean;
}

@Component({
  selector: 'app-scrum-view',
  templateUrl: './scrum-view.component.html',
  styleUrls: ['./scrum-view.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
  ],
})
export class ScrumViewComponent {
  public boards = [
    {
      name: 'Planejamento',
      opened: true,
      tasks: [
        { userId: '04/2024', description: 'Definir os requisitos do edital e especificações técnicas.', important: true },
        { userId: '05/2024', description: 'Elaborar o cronograma do processo licitatório.', bug: true },
        { userId: '06/2024', description: 'Identificar as demandas do órgão contratante.' },
        { userId: '07/2024', description: 'Analisar a viabilidade jurídica e financeira.', important: true, bug: true },
      ] as Task[],
    },
    {
      name: 'Em Progresso',
      opened: true,
      tasks: [
        { userId: '08/2024', description: 'Publicar o edital no portal oficial.', important: true, bug: true },
        { userId: '09/2024', description: 'Receber propostas das empresas participantes.', important: true },
        { userId: '10/2024', description: 'Responder aos pedidos de esclarecimento.', important: true, bug: true },
        { userId: '11/2024', description: 'Realizar análise técnica das propostas recebidas.', bug: false },
      ] as Task[],
    },
    {
      name: 'Análise Jurídica (AGU)',
      opened: true,
      tasks: [
        { userId: '12/2024', description: 'Revisar o edital e as cláusulas contratuais.', bug: false },
        { userId: '01/2025', description: 'Emitir parecer jurídico sobre eventuais impugnações.', bug: false },
        { userId: '02/2025', description: 'Garantir conformidade com a legislação vigente.', important: true, bug: true },
      ],
    },
    {
      name: 'Sessão Pública',
      opened: true,
      tasks: [
        { userId: '03/2025', description: 'Realizar abertura das propostas em sessão pública.' },
        { userId: '04/2025', description: 'Registrar a ata da sessão com os resultados obtidos.', bug: false },
        { userId: '05/2025', description: 'Divulgar o vencedor provisório e abrir prazo para recursos.', important: true, bug: true },
      ],
    },
    {
      name: 'Finalizado',
      opened: true,
      tasks: [
        { userId: '06/2025', description: 'Formalizar a adjudicação e homologação do processo.', important: true },
        { userId: '07/2025', description: 'Emitir a ordem de serviço para o fornecedor vencedor.', bug: false },
        { userId: '08/2025', description: 'Encerrar oficialmente o processo licitatório.', bug: false },
      ],
    },
  ];

  toggleBoard(board: any): void {
    board.opened = !board.opened;
  }
  generateReport(): void {
    // Lógica para geração do relatório
    console.log('Relatório gerado com sucesso!');
  }
}