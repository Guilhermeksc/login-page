import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
  ],
})
export class CalendarComponent implements OnInit {
  public currentMonth!: string;
  public currentYear!: number;
  public daysOfWeek: string[] = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  public calendarDays: number[][] = [];

  ngOnInit(): void {
    this.generateCalendar(new Date());
  }

  generateCalendar(date: Date): void {
    this.currentYear = date.getFullYear();
    this.currentMonth = date.toLocaleString('default', { month: 'long' });

    const firstDayOfMonth = new Date(this.currentYear, date.getMonth(), 1).getDay();
    const daysInMonth = new Date(this.currentYear, date.getMonth() + 1, 0).getDate();

    let daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    let emptyDays = Array.from({ length: firstDayOfMonth }, () => 0);
    daysArray = [...emptyDays, ...daysArray];

    // Divide os dias em semanas
    this.calendarDays = [];
    while (daysArray.length) {
      this.calendarDays.push(daysArray.splice(0, 7));
    }
  }

  previousMonth(): void {
    const date = new Date(this.currentYear, new Date().getMonth() - 1);
    this.generateCalendar(date);
  }

  nextMonth(): void {
    const date = new Date(this.currentYear, new Date().getMonth() + 1);
    this.generateCalendar(date);
  }
}
