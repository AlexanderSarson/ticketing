import { Publisher, PaymentCreatedEvent, Subjects } from '@alsatickets/common';

class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}

export { PaymentCreatedPublisher };
