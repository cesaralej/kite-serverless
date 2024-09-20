import { Resource } from "sst";
import { Util } from "@kite/core/util";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { PutCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const dynamoDb = DynamoDBDocumentClient.from(new DynamoDBClient({}));

export const main = Util.handler(async (event) => {
  console.log("Connect event", event);
  console.log("ConnectionId", event.requestContext.connectionId);

  const connectionId = event.requestContext.connectionId;

  const params = {
    TableName: Resource.Conversations.name,
    Item: {
      conversationId: connectionId,
      userId: event.requestContext.authorizer?.iam.cognitoIdentity.identityId,
    },
  };

  await dynamoDb.send(new PutCommand(params));

  return JSON.stringify(params.Item);
});
