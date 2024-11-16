import { proxyActivities } from '@temporalio/workflow';
// Only import the activity types
import type * as activities from './activities';

const { greet, fetchAllPeople } = proxyActivities<typeof activities>({
  startToCloseTimeout: '1 minute',
});

/** A workflow that simply calls an activity */
export async function example(name: string): Promise<string> {
  return await greet(name);
}

export async function fetchAllPeopleWorkflow() {
  return await fetchAllPeople();
}
