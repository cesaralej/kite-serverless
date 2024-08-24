import { table } from "./storage";

// Create the API
export const api = new sst.aws.ApiGatewayV2("Api", {
  transform: {
    route: {
      handler: {
        link: [table],
      },
      args: {
        auth: { iam: true },
      },
    },
  },
});

api.route("POST /messages", "packages/functions/src/create.main");
api.route("GET /messages/{id}", "packages/functions/src/get.main");
api.route("GET /messages", "packages/functions/src/list.main");
api.route("PUT /messages/{id}", "packages/functions/src/update.main");
api.route("DELETE /messages/{id}", "packages/functions/src/delete.main");
