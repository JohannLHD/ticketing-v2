import { Subjects, Publisher, PaymentCreatedEvent } from '@tickets-master-lhd/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
