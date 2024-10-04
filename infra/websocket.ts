import { messagesTable } from "./storage";
import { connectionsTable } from "./storage";

const region = aws.getRegionOutput().name;
const accountId = aws.getCallerIdentityOutput({}).accountId;

export const wsapi = new sst.aws.ApiGatewayWebSocket("WSApi", {
  transform: {
    route: {
      handler: {
        link: [messagesTable, connectionsTable],
      },
    },
  },
});

wsapi.route("$connect", {
  handler: "packages/functions/src/conversations/connect.main",
});
wsapi.route("$default", "packages/functions/src/conversations/default.main");
wsapi.route("$disconnect", {
  handler: "packages/functions/src/conversations/disconnect.main",
});
wsapi.route("sendMessage", {
  handler: "packages/functions/src/conversations/sendMessage.main",
  permissions: [
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
});
