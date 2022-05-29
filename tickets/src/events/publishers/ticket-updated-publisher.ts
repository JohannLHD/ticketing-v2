import { Publisher, Subjects, TicketUpdatedEvent } from '@tickets-master-lhd/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}