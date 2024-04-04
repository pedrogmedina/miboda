import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public saveEventCalendar() {
    window.location.href = 'https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NGl2NmFtNmsyNjBzYTB2cGJtMzV0b3Eya3QgcGVsdXN1czQ0QG0&tmsrc=pelusus44%40gmail.com'
  }
}
