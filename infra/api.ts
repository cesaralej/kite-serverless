import { connectionsTable } from "./storage";

// Create the API
export const api = new sst.aws.ApiGatewayV2("Api", {
  transform: {
    route: {
      handler: {
        link: [connectionsTable],
      },
      args: {
        auth: { iam: true },
      },
    },
  },
});

api.route("GET /connections", "packages/functions/src/connections/list.main");
