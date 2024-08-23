import { Resource } from "sst";
import { Example } from "@kite/core/example";

console.log(`${Example.hello()} Linked to ${Resource.MyBucket.name}.`);
