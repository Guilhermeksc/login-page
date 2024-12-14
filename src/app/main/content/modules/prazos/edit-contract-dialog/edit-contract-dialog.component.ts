import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-edit-contract-dialog',
  templateUrl: './edit-contract-dialog.component.html',
  styleUrls: ['./edit-contract-dialog.component.scss'],
  standalone: true,
  imports: [FormsModule, MatIconModule, MatFormFieldModule, MatInputModule, MatButtonModule]
})
export class EditContractDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<EditContractDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public contract: any
  ) {}

  onSave(): void {
    this.dialogRef.close(this.contract);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}