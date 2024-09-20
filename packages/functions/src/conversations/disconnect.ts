import { Resource } from "sst";
import { Util } from "@kite/core/util";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DeleteCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const dynamoDb = DynamoDBDocumentClient.from(new DynamoDBClient({}));

export const main = Util.handler(async (event) => {
  const connectionId = event.requestContext.connectionId;
  const params = {
    TableName: Resource.Conversations.name,
    Key: {
      conversationId: connectionId, // The id of the conversation
      userId: event.requestContext.authorizer?.iam.cognitoIdentity.identityId,
    },
  };
  try {
    // Remove the connection from the DynamoDB table
    await dynamoDb.send(new DeleteCommand(params));
    console.log(`Connection ${connectionId} deleted from table`);

    // Return a success message
    return JSON.stringify({ message: `Disconnected ${connectionId}` });
  } catch (error) {
    console.error(`Failed to delete connection ${connectionId}:`, error);
    throw new Error(`Failed to disconnect: ${(error as Error).message}`);
  }
});
