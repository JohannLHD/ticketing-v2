import { Publisher, OrderCreatedEvent, Subjects } from '@tickets-master-lhd/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
