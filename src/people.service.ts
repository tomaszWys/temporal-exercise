import * as axios from 'axios';
import { swapiPeopleResponse } from './domain/people.interface';

//TODO: use env file with config
export class PeopleService {
  async fetchAllPeople(): Promise<swapiPeopleResponse> {
    const response = await axios.get<swapiPeopleResponse>('https://swapi.dev/api/people');
    return response.data;
  }
}