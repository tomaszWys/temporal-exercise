//TODO: move to separate file
export type swapiPeopleResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: swapiPerson[];
}

export type swapiPerson = {
  name: string;
  height: string;
}