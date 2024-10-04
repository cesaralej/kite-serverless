import { Resource } from "sst";
import { Util } from "@kite/core/util";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DeleteCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const dynamoDb = DynamoDBDocumentClient.from(new DynamoDBClient({}));

export const main = Util.handler(async (event) => {
  //console.log("Disconnect event", event);
  const connectionId = event.requestContext.connectionId;
  //console.log("ConnectionId: ", connectionId);
  const params = {
    TableName: Resource.Connections.name,
    Key: {
      connectionId: connectionId, // The id of the conversation
    },
  };
  //console.log(`Deleting connection ${connectionId} from table`);
  try {
    // Remove the connection from the DynamoDB table
    await dynamoDb.send(new DeleteCommand(params));
    console.log(`Connection ${connectionId} disconnected`);

    // Return a success message
    return JSON.stringify({ message: `Disconnected ${connectionId}` });
  } catch (error) {
    console.error(`Failed to delete connection ${connectionId}:`, error);
    throw new Error(`Failed to disconnect: ${(error as Error).message}`);
  }
});
