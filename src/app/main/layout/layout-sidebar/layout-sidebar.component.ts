import { Component, EventEmitter, Output } from '@angular/core';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout-sidebar',
  templateUrl: './layout-sidebar.component.html',
  styleUrls: ['./layout-sidebar.component.scss'],
  imports: [ NgScrollbarModule, CommonModule ]
})
export class LayoutSidebarComponent {
  @Output() sectionChange = new EventEmitter<string>();

  collapsedSections = {
    dashboard: true,
    modulos: true,
    documentos: true,
    configuracoes: false
  };

  activeSection: string = '';  
  
  toggleSection(section: keyof typeof this.collapsedSections) {
    this.collapsedSections[section] = !this.collapsedSections[section];
  }

  navigateTo(section: string): void {
    this.activeSection = section; // Atualizar seção ativa
    this.sectionChange.emit(section); // Emitir evento para outras partes do sistema
  }
}