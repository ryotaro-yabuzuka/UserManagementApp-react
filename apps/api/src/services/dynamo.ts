import { DynamoDB } from '@aws-sdk/client-dynamodb'
import { DynamoDBDocument } from '@aws-sdk/lib-dynamodb'

let client: DynamoDBDocument | null = null
export function getClient() {
  if (!client) {
    const ddb = new DynamoDB({})
    client = DynamoDBDocument.from(ddb)
  }
  return client
}
