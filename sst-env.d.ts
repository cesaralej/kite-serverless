/* tslint:disable */
/* eslint-disable */
import "sst"
declare module "sst" {
  export interface Resource {
    "Api": {
      "type": "sst.aws.ApiGatewayV2"
      "url": string
    }
    "Messages": {
      "name": string
      "type": "sst.aws.Dynamo"
    }
    "Uploads": {
      "name": string
      "type": "sst.aws.Bucket"
    }
  }
}
export {}
