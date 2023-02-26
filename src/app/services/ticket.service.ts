import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITickets } from '../interfaces/ITickets';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private readonly API = 'http://localhost:3000/api/v1/ticket';

  constructor(
    private http: HttpClient
  ) { }

  createTicket(ticket: ITickets): Observable<ITickets> {
    return this.http.post<ITickets>(this.API, ticket);
  }

  listAllTickets(): Observable<ITickets[]>{
    return this.http.get<ITickets[]>(this.API)
  }
}
