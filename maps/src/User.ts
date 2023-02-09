import { faker } from "@faker-js/faker";



export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    // .name.firstName() is a method in faker package.
    this.name = faker.name.firstName();
    this.location = {
      
      // ParceFloat is a default JS mothod that takes a string and returns a float. we used it because Faker library for some reason set the Type of lat and long functions to return a string.
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }
}