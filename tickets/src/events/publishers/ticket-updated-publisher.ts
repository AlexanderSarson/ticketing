import { Publisher, Subjects, TicketUpdatedEvent } from '@alsatickets/common';

class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}

export { TicketUpdatedPublisher };
