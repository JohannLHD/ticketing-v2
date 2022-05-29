import { Publisher, Subjects, TicketCreatedEvent } from '@tickets-master-lhd/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}