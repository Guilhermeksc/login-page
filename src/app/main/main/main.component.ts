import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutMiniSidebarComponent } from '../layout/layout-mini-sidebar/layout-mini-sidebar.component';
import { LayoutSidebarComponent } from '../layout/layout-sidebar/layout-sidebar.component';
import { ScrumViewComponent } from '../content/dashboard/scrum/scrum-view/scrum-view.component';
import { PgcComponent } from '../content/dashboard/pgc/pgc.component';
import { AnaliseComponent } from '../content/dashboard/analise/analise.component';
import { ApresentacaoComponent } from '../content/dashboard/apresentacao/apresentacao.component';
import { CalendarComponent } from '../content/dashboard/calendar/calendar.component';
import { ChatComponent } from '../content/dashboard/chat/chat.component';
import { DashComponent } from '../content/dashboard/dash/dash.component';
import { PrazosComponent } from '../content/modules/prazos/prazos.component';
import { MatDialogModule } from '@angular/material/dialog';


@Component({
  standalone: true,
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  imports: [
    CommonModule,
    MatDialogModule,
    LayoutMiniSidebarComponent,
    LayoutSidebarComponent,
    ScrumViewComponent,
    PgcComponent,
    AnaliseComponent,
    ApresentacaoComponent,
    CalendarComponent,
    ChatComponent,
    DashComponent,
    PrazosComponent,
  ],
})
export class MainComponent {
  activeSection: string = 'scrum-view';

  setSection(section: string) {
    this.activeSection = section;
  }
}
