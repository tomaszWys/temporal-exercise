import { Connection, Client } from '@temporalio/client';
import { fetchPeopleWorkflow } from './workflows';
import { nanoid } from 'nanoid';
import { OPERATOR } from './domain/rule.interface';

async function run() {
  // Connect to the default Server location
  const connection = await Connection.connect({ address: 'localhost:7233' });
  // In production, pass options to configure TLS and other settings:
  // {
  //   address: 'foo.bar.tmprl.cloud',
  //   tls: {}
  // }

  const client = new Client({
    connection,
    // namespace: 'foo.bar', // connects to 'default' namespace if not specified
  });

  const handle = await client.workflow.start(fetchPeopleWorkflow, {
    taskQueue: 'hello-world',
    // type inference works! args: [name: string]
    args: [[{
      propertyName: "name",
      operator: OPERATOR.REGEX,
      value: "\\d"
    },
    {
      propertyName: "eye_color",
      operator: OPERATOR.EQUAL,
      value: "red"
    }
    ]],
    // in practice, use a meaningful business ID, like customerId or transactionId
    workflowId: 'workflow-' + nanoid(),
  });
  console.log(`Started workflow ${handle.workflowId}`);

  // optional: wait for client result
  console.log(await handle.result()); // Hello, Temporal!
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
