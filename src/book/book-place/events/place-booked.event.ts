import { Place, User } from '@prisma/client';
import { UserSession } from '../../../../types/user';
import { UserEntity } from '../../../users/entities/user.entity';

export class PlaceBookedEvent {
  startDate!: Date;
  endDate!: Date;
  buyer!: UserEntity;
  seller!: UserEntity;
  total!: number;
  place!: Place;

  constructor(event: PlaceBookedEvent) {
    Object.assign(this, event);
  }
}
