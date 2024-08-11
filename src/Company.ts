import { faker } from '@faker-js/faker';
import { Location } from './User';

export class Company {
  readonly companyName: string;
  readonly catchPhrase: string;
  readonly location: Location;

  constructor() {
    this.companyName = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }
}
