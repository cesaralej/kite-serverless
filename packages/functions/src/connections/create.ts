import * as uuid from "uuid";
import { Resource } from "sst";
import { Util } from "@kite/core/util";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { PutCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const dynamoDb = DynamoDBDocumentClient.from(new DynamoDBClient({}));

export const main = Util.handler(async (event) => {
  let data: {
    identityId?: string;
    email?: string;
    name?: string;
    profilePicture?: string;
    role?: string;
    department?: string;
  } = {};

  if (event.body != null) {
    // Attempt to parse the body
    data = JSON.parse(event.body);
  }

  const params = {
    TableName: Resource.Users.name,
    Item: {
      // The attributes of the item to be created
      //userId: event.requestContext.authorizer?.iam.cognitoIdentity.identityId,
      //messageId: uuid.v1(), // A unique uuid
      userId: data.identityId,
      email: data.email, // User email
      name: data.name, // Display name
      profilePicture: data.profilePicture || "", // Optional profile picture URL
      role: data.role, // Role in the company
      department: data.department, // User's department
      status: "offline", // Initial status (can change later based on presence)
      lastSeen: Date.now(), // Timestamp when the user was last online

      // Messaging Information
      unreadMessageCount: 0, // Initialize with zero unread messages
      conversations: [], // List of conversation IDs (will populate with future chats)

      // Online Status and Connection Info
      onlineStatus: false, // Initially false, changes to true when user is connected
      webSocketConnectionId: "", // Placeholder for the WebSocket connection ID (can update later when user connects)

      // Friends/Contacts or Relationships
      friends: [], // Placeholder for a list of friends or contacts (can be empty initially)
      blockedUsers: [], // Placeholder for a list of blocked users (can be empty initially)

      // App-Specific Preferences
      notificationPreferences: { email: true, push: false, inApp: true }, // Example notification preferences
      chatSettings: { darkMode: false, language: "en" }, // Example chat settings (can expand based on user preferences)

      // Metadata
      createdAt: new Date().toISOString(), // Creation timestamp
    },
  };

  console.log("Creating user with data:", params.Item.email);

  await dynamoDb.send(new PutCommand(params));

  return JSON.stringify(params.Item);
});
