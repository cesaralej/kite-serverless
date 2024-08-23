// Create an S3 bucket
export const bucket = new sst.aws.Bucket("Uploads");

// Create the DynamoDB table
export const table = new sst.aws.Dynamo("Messages", {
  fields: {
    userId: "string",
    messageId: "string",
  },
  primaryIndex: { hashKey: "userId", rangeKey: "messageId" },
});
