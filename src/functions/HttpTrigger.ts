import {
  app,
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
} from "@azure/functions";
import { testClass } from "./sample.js";

export async function HttpTrigger(
  request: HttpRequest,
  context: InvocationContext
): Promise<HttpResponseInit> {
  context.log(`Http function processed request for url "${request.url}"`);

  const name = request.query.get("name") || (await request.text()) || "world";

  const instance = new testClass();
  const result = await instance.testMethod();

  return { body: `Hello, ${name}! ${result}` };
}

app.http("HttpTrigger", {
  methods: ["GET", "POST"],
  authLevel: "anonymous",
  handler: HttpTrigger,
});
