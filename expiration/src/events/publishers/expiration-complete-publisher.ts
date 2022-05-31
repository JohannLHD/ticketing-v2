import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@tickets-master-lhd/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
