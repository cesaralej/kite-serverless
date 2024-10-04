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
            aws.getCallerIdentityOutput({}).accountId,
            ":",
            api.nodes.api.id,
            "/*/*/*"
          ),
        ],
      },
      {
        actions: ["execute-api:*"],
        resources: [
          "arn:aws:execute-api:us-east-1:376129882365:0ck7r5veaj/$default/POST/@connections/*",
          "arn:aws:lambda:us-east-1:376129882365:function:kite-cesargarcia-WSApiRouteNxtvexHandlerFunction",
        ],
      },
    ],
  },
});
