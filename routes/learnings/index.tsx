import { page } from "@fresh/core";
import { define } from "../../utils.ts";

export const handler = define.handlers({
	GET(context) {
		context.state.title = "Learnings";
		return page();
	},
});

export default define.page(() => {
	return <h1>Learnings</h1>;
});
