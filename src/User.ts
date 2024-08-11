import { faker } from '@faker-js/faker';

export interface Location {
  lat: number;
  lng: number;
}

export class User {
  readonly name: string;
  readonly location: Location;

  constructor() {
    this.name = faker.person.fullName();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }
}
