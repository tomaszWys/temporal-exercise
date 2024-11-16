import { proxyActivities } from '@temporalio/workflow';
// Only import the activity types
import type * as activities from './activities';
import { rule } from './domain/rule.interface';
import { filterData } from './filter-data.helper';

const { greet, fetchPeople } = proxyActivities<typeof activities>({
  startToCloseTimeout: '1 minute',
});

/** A workflow that simply calls an activity */
export async function example(name: string): Promise<string> {
  return await greet(name);
}

export async function fetchPeopleWorkflow(rules?: rule[]) {
  const people = await fetchPeople();
  return filterData(people, rules)
}