import { messagesTable } from "./storage";
import { connectionsTable } from "./storage";

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
  link: [connectionsTable],
});
wsapi.route("$default", "packages/functions/src/conversations/default.main");
wsapi.route("$disconnect", {
  handler: "packages/functions/src/conversations/disconnect.main",
  link: [connectionsTable],
});
wsapi.route("sendMessage", {
  handler: "packages/functions/src/conversations/sendMessage.main",
  link: [connectionsTable, messagesTable],
  permissions: [
    {
      actions: ["execute-api:*"],
      resources: [
        "arn:aws:execute-api:us-east-1:376129882365:0ck7r5veaj/*/*/*/*",
      ],
    },
  ],
});

/* hello */
