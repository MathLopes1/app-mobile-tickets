import { ITickets } from './../interfaces/ITickets';
import { TicketService } from './../services/ticket.service';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  ticket: ITickets = {
    patientName: '',
    cpf: '',
    address: '',
    service: '',
    urgency: ''
  }

  constructor(
    private ticketService: TicketService,
    private alertController: AlertController
  ) { }

  createTicket() {
    this.ticketService.createTicket(this.ticket).subscribe(
      (response) => {
        console.log('Ticket created successfully', response);
        this.ticketCreateSucess()
        this.ticket = {
          patientName: '',
          cpf: '',
          address: '',
          service: '',
          urgency: ''
        }
      },
      (error) => {
        console.error('Error creating ticket', error);
      }
    );
  }

  async ticketCreateSucess() {
    const alert = await this.alertController.create({
      header: 'Sucesso',
      message: 'O Ticket foi criado com sucesso!',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
