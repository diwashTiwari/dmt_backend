import { Review } from "@prisma/client";

export class ReviewAggregateEvent {
  placeId!: number;

  constructor(event: ReviewAggregateEvent) {
    Object.assign(this, event);
  }
}
