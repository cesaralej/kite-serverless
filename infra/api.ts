import { messagesTable } from "./storage";

// Create the API
export const api = new sst.aws.ApiGatewayV2("Api", {
  transform: {
    route: {
      handler: {
        link: [messagesTable],
      },
      args: {
        auth: { iam: true },
      },
    },
  },
});

api.route("POST /messages", "packages/functions/src/messages/create.main");
api.route("GET /messages/{id}", "packages/functions/src/messages/get.main");
api.route("GET /messages", "packages/functions/src/messages/list.main");
api.route("PUT /messages/{id}", "packages/functions/src/messages/update.main");
api.route(
  "DELETE /messages/{id}",
  "packages/functions/src/messages/delete.main"
);
