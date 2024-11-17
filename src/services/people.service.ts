import * as axios from 'axios';
import { SwapiPeopleResponse, SwapiPerson } from '../domain/people.interface';

//TODO: use env file with config
export class PeopleService {
  async fetchPeople(): Promise<SwapiPerson[]> {
    const response = await axios.get<SwapiPeopleResponse>('https://swapi.dev/api/people');
    return response.data.results;
  }
}
