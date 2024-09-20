import { APIGatewayProxyHandler } from "aws-lambda";

export const main: APIGatewayProxyHandler = async (event) => {
  console.log("Message received on $default route:", event);
  return { statusCode: 200, body: "Message sent" };
};
