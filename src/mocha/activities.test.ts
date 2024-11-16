import { MockActivityEnvironment } from '@temporalio/testing';
import { describe, it } from 'mocha';
import * as activities from '../activities';
import assert from 'assert';
import { swapiPerson } from '../domain/people.interface';

describe('greet activity', async () => {
  it('successfully greets the user', async () => {
    const env = new MockActivityEnvironment();
    const name = 'Temporal';
    const result = await env.run(activities.greet, name);
    assert.equal(result, 'Hello, Temporal!');
  });
});

describe('fetchAllPeople activity', async () => {
  it('successfully fetch all people', async () => {
    const env = new MockActivityEnvironment();
    const results = (await env.run(activities.fetchAllPeople)) as unknown as swapiPerson[];
    assert.ok(results.length > 0);
  });
});
