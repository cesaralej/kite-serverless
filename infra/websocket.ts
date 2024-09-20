import { conversationsTable } from "./storage";

export const wsapi = new sst.aws.ApiGatewayWebSocket("WSApi", {
  transform: {
    route: {
      handler: {
        link: [conversationsTable],
      },
      args: {
        auth: { iam: true },
      },
    },
  },
});

wsapi.route("$connect", "packages/functions/src/conversations/connect.main");
wsapi.route("$default", "packages/functions/src/conversations/default.main");
wsapi.route(
  "$disconnect",
  "packages/functions/src/conversations/disconnect.main"
);
wsapi.route(
  "sendMessage",
  "packages/functions/src/conversations/sendMessage.main"
);
/* hello `world` */
