import type { JSX } from "preact/jsx-runtime";
import { HttpError, page } from "@fresh/core";
import { define } from "../../utils.ts";
import { type Frontmatter, PROJECTS_DIRECTORY } from "./index.tsx";
import Image from "../../components/post_image.tsx";
import Headings from "../../components/post_headings.tsx";
import Metadata from "../../components/post_metadata.tsx";

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
	const { frontmatter } = context.data;

	return (
		<article>
			<header>
				<Image {...frontmatter} />
				<Headings {...frontmatter} />
				<Metadata {...frontmatter} />
			</header>

			<context.data.Component />
		</article>
	);
});
