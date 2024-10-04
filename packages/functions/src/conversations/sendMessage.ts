import { Resource } from "sst";
import * as uuid from "uuid";
import { APIGatewayProxyHandler } from "aws-lambda";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  GetCommand,
  PutCommand,
  DynamoDBDocumentClient,
} from "@aws-sdk/lib-dynamodb";
import {
  ApiGatewayManagementApiClient,
  PostToConnectionCommand,
} from "@aws-sdk/client-apigatewaymanagementapi";

const dynamoDb = DynamoDBDocumentClient.from(new DynamoDBClient({}));

//TODO this is not using the handler. It is also getting the user ID from teh dynamo table...shoudl I send it in the url instead so that I dont have to query teh table?
export const main: APIGatewayProxyHandler = async (event) => {
  // Parse the incoming WebSocket message
  const body = JSON.parse(event.body || "{}");
  //console.log("Body:", body.data);

  // Extract the actual message content from the body
  const messageContent = body.data.message;
  const connectionId = body.data.userId;

  if (!messageContent) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Message content is required" }),
    };
  }

  try {
    // Parameters for DynamoDB PutCommand
    const params = {
      TableName: Resource.Messages.name, // Table linked to the "Messages" resource
      Item: {
        messageId: uuid.v1(), // Use a unique ID (timestamp in this case)
        userId: connectionId, // From the incoming request
        content: messageContent, // The actual message content from WebSocket
        createdAt: Date.now(), // Current Unix timestamp
      },
    };

    // Store the message in DynamoDB
    await dynamoDb.send(new PutCommand(params));

    const apigwManagementApi = new ApiGatewayManagementApiClient({
      apiVersion: "2018-11-29",
      endpoint:
        "https://" +
        event.requestContext.domainName +
        "/" +
        event.requestContext.stage,
    });

    const postParams = {
      ConnectionId: connectionId,
      Data: messageContent,
    };

    await apigwManagementApi.send(new PostToConnectionCommand(postParams));
    console.log("Message sent:", messageContent);

    return {
      statusCode: 200,
      body: JSON.stringify({ status: "Message stored successfully" }),
    };
  } catch (error) {
    console.error("Error storing message:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to store message" }),
    };
  }
};
