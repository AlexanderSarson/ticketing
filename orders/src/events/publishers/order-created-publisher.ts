import { Publisher, OrderCreatedEvent, Subjects } from '@alsatickets/common';

class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}

export { OrderCreatedPublisher };
