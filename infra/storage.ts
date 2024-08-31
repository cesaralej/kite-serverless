// Create an S3 bucket
export const bucket = new sst.aws.Bucket("Uploads");

// Create the DynamoDB table for Messages with GSI
export const messagesTable = new sst.aws.Dynamo("Messages", {
  fields: {
    conversationId: "string",
    messageId: "string",
    timestamp: "string",
  },
  primaryIndex: { hashKey: "conversationId", rangeKey: "messageId" },
  globalIndexes: {
    TimestampIndex: {
      hashKey: "conversationId",
      rangeKey: "timestamp",
    },
  },
});

// Create the DynamoDB table for Users
export const usersTable = new sst.aws.Dynamo("Users", {
  fields: {
    userId: "string",
  },
  primaryIndex: { hashKey: "userId" },
});

// Create the DynamoDB table for Conversations with GSI
export const conversationsTable = new sst.aws.Dynamo("Conversations", {
  fields: {
    conversationId: "string",
    userId: "string",
  },
  primaryIndex: { hashKey: "conversationId", rangeKey: "userId" },
  globalIndexes: {
    UserIndex: {
      hashKey: "userId",
    },
  },
});
