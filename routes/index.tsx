import { page } from "@fresh/core";
import { define } from "../utils.ts";

export const handler = define.handlers({
	GET(context) {
		context.state.title = "Komuhn";
		return page();
	},
});

export default define.page(() => {
	return <h1>Komuhn</h1>;
});
