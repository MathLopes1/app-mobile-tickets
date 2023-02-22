import { ITickets } from './../interfaces/ITickets';
import { Component, OnInit } from '@angular/core';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  allTickets: ITickets[] = [

  ]

  constructor(
    private ticketService: TicketService
  ) {}

  ngOnInit(): void {
    this.ticketService.listAllTickets().subscribe((ticket) => {
      this.allTickets = ticket;
    })
  }
}
