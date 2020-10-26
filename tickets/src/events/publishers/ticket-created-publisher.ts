import { Publisher, Subjects, TicketCreatedEvent } from '@alsatickets/common';

class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}

export { TicketCreatedPublisher };
