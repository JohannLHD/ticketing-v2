import { Subjects, Publisher, OrderCancelledEvent } from '@tickets-master-lhd/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
