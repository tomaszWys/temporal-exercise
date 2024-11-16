//TODO: move to separate file
export interface swapiPeopleResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: swapiPerson[];
}

export interface swapiPerson {
  name: string;
  height: string;
}
