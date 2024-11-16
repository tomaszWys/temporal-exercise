import { PeopleService } from './people.service';

export async function greet(name: string): Promise<string> {
  return `Hello, ${name}!`;
}

export async function fetchPeople() {
  const peopleService = new PeopleService();
  return await peopleService.fetchPeople();
}
