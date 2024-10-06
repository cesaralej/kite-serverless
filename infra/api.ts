import { usersTable } from "./storage";

// Create the API
export const api = new sst.aws.ApiGatewayV2("Api", {
  transform: {
    route: {
      handler: {
        link: [usersTable],
      },
      args: {
        auth: { iam: true },
      },
    },
  },
});

api.route(
  "POST /connections",
  "packages/functions/src/connections/create.main"
);
api.route("GET /connections", "packages/functions/src/connections/list.main");
