import { Publisher, OrderCancelledEvent, Subjects } from '@alsatickets/common';

class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}

export { OrderCancelledPublisher };
