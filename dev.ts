import { Builder } from "@fresh/core/dev";
import { app } from "./main.ts";

const builder = new Builder();

if (Deno.args.includes("build")) {
	await builder.build(app);
} else {
	await builder.listen(app);
}
