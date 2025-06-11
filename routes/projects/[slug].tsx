import { HttpError, page } from "@fresh/core";
import { define } from "../../utils.ts";
import { type Frontmatter, PROJECTS_DIRECTORY } from "./index.tsx";
import type { JSX } from "preact/jsx-runtime";

export const handler = define.handlers({
	async GET(context) {
		let frontmatter: Frontmatter;
		let Component: JSX.ElementType;

		try {
			const path = `../../${PROJECTS_DIRECTORY}/${context.params.slug}.js`;
			({ frontmatter, default: Component } = await import(path));
		} catch (error) {
			throw error instanceof TypeError &&
					error.message.startsWith("Module not found")
				? new HttpError(404)
				: error;
		}

		context.state.title = frontmatter.title;

		return page({ frontmatter, Component });
	},
});

export default define.page<typeof handler>((context) => {
	return (
		<article>
			<header>
				<h1>{context.data.frontmatter.title}</h1>
			</header>

			<context.data.Component />
		</article>
	);
});
