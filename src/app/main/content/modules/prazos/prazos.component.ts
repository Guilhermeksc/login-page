import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { EditContractDialogComponent } from './edit-contract-dialog/edit-contract-dialog.component';

@Component({
  selector: 'app-prazos',
  templateUrl: './prazos.component.html',
  styleUrls: ['./prazos.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule, MatDialogModule],
})
export class PrazosComponent implements OnInit {
  searchTerm: string = '';
  selectedRow: any = null;
  rows: any[] = [];
  filteredRows: any[] = [];
  editingContract: any = null;

  constructor(private http: HttpClient, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.http.get<any[]>('assets/data.json').subscribe(data => {
      this.rows = data;
      this.filteredRows = [...this.rows];
    });
  }

  buscar(): void {
    const searchTermLower = this.searchTerm.toLowerCase();
    this.filteredRows = this.rows.filter((row) =>
      Object.values(row).some(value => {
        if (value !== null && value !== undefined) {
          return value.toString().toLowerCase().includes(searchTermLower);
        }
        return false;
      })
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

  onRowDoubleClick(row: any): void {
    console.log('Double clicked row:', row);
    this.editingContract = { ...row };
    console.log('Editing contract:', this.editingContract);

    const dialogRef = this.dialog.open(EditContractDialogComponent, {
      width: '500px',
      data: { ...row }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.rows.findIndex(r => r.numeroContrato === result.numeroContrato);
        if (index !== -1) {
          this.rows[index] = result;
          this.filteredRows = [...this.rows];
        }
      }
    });
  }
}