import { api } from "./api";
import { wsapi } from "./websocket";
import { bucket } from "./storage";

const region = aws.getRegionOutput().name;
const accountId = aws.getCallerIdentityOutput({}).accountId;

export const userPool = new sst.aws.CognitoUserPool("UserPool", {
  usernames: ["email"],
});

export const userPoolClient = userPool.addClient("UserPoolClient");

export const identityPool = new sst.aws.CognitoIdentityPool("IdentityPool", {
  userPools: [
    {
      userPool: userPool.id,
      client: userPoolClient.id,
    },
  ],
  permissions: {
    authenticated: [
      {
        actions: ["s3:*"],
        resources: [
          $concat(
            bucket.arn,
            "/private/${cognito-identity.amazonaws.com:sub}/*"
          ),
        ],
      },
      {
        actions: ["execute-api:*"],
        resources: [
          $concat(
            "arn:aws:execute-api:",
            region,
            ":",
            accountId,
            ":",
            api.nodes.api.id,
            "/*/*/*"
          ),
        ],
      },
      {
        actions: ["execute-api:*"],
        resources: [
          $concat(
            "arn:aws:execute-api:",
            region,
            ":",
            accountId,
            ":",
            wsapi.nodes.api.id,
            "/*/*/*"
          ),
        ],
      },
    ],
  },
});
