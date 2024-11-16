import { MockActivityEnvironment } from '@temporalio/testing';
import { describe, it } from 'mocha';
import * as activities from '../activities';
import assert from 'assert';
import { swapiPeopleResponse } from '../domain/people.interface';

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
    const result = (await env.run(activities.fetchAllPeople)) as unknown as swapiPeopleResponse;
    assert.ok(result.count > 0);
  });
});
