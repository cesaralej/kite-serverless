// Create an S3 bucket
export const bucket = new sst.aws.Bucket("Uploads");

// Create the DynamoDB table for Messages
export const messagesTable = new sst.aws.Dynamo("Messages", {
  fields: {
    userId: "string",
    messageId: "string",
  },
  primaryIndex: { hashKey: "userId", rangeKey: "messageId" },
});

// Create the DynamoDB table for Users
export const usersTable = new sst.aws.Dynamo("Users", {
  fields: {
    userId: "string",
  },
  primaryIndex: { hashKey: "userId" },
});

// Create the DynamoDB table for Conversations
export const conversationsTable = new sst.aws.Dynamo("Conversations", {
  fields: {
    conversationId: "string",
    userId: "string",
  },
  primaryIndex: { hashKey: "conversationId", rangeKey: "userId" },
});
