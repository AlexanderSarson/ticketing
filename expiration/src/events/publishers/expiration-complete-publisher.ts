import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@alsatickets/common';

class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}

export { ExpirationCompletePublisher };
