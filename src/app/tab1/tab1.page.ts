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

      this.allTickets = this.stepForListTicket(ticket);
    })
  }

  private stepForListTicket(tickets: ITickets[]): ITickets[] {
      return tickets.map((ticket) => {
        switch (ticket.service) {
          case "MEDICAL_APPOINTMENT":
              ticket.service = "Atendimento Médico";
            break;
          case "EXAMS":
              ticket.service = "Exames";
            break;
          default:
            break;
        }

        switch (ticket.urgency) {
          case "HIGH":
              ticket.urgency = "Alta";
            break;
          case "MEDIUM":
              ticket.urgency = "Média";
            break;
          case "LOW":
              ticket.urgency = "Baixa";
            break;
          default:
            break;
        }

        return ticket
      })
  }
}
