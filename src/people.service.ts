import * as axios from 'axios';
import { swapiPeopleResponse, swapiPerson } from './domain/people.interface';

//TODO: use env file with config
export class PeopleService {
  async fetchPeople(): Promise<swapiPerson[]> {
    const response = await axios.get<swapiPeopleResponse>('https://swapi.dev/api/people');
    return response.data.results;
  }
}
