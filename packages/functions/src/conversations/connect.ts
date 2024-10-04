import { Resource } from "sst";
import { Util } from "@kite/core/util";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { PutCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const dynamoDb = DynamoDBDocumentClient.from(new DynamoDBClient({}));

export const main = Util.handler(async (event) => {
  //console.log("Connect event", event);
  //console.log("Connect User: ", event.requestContext.authorizer);
  //console.log("User? ", event.queryStringParameters?.identityId);
  const userid = event.queryStringParameters?.identityId;

  const connectionId = event.requestContext.connectionId;
  console.log(`Connection ${connectionId} is online`);

  const params = {
    TableName: Resource.Connections.name,
    Item: {
      connectionId: connectionId,
      userId: userid,
      createdAt: Date.now(),
    },
  };

  await dynamoDb.send(new PutCommand(params));

  return JSON.stringify(params.Item);
});
