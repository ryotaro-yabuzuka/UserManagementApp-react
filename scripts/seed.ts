import { DynamoDBClient, PutItemCommand } from '@aws-sdk/client-dynamodb'

const client = new DynamoDBClient({})

async function run() {
  await client.send(new PutItemCommand({
    TableName: process.env.TABLE_NAME,
    Item: { pk: { S: 'demo' }, sk: { S: '1' }, data: { S: 'seed' } }
  }))
  console.log('seeded')
}
run()
