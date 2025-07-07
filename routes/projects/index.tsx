import type { JSX } from "preact/jsx-runtime";
import { page } from "@fresh/core";
import { define } from "../../utils.ts";

export interface Frontmatter {
	title: string;
	subtitle?: string;
	image?: string;
	topics?: string;
	timeline?: string;
	region?: string;
	links?: string[];
	partners?: string[];
}

export const PROJECTS_DIRECTORY = "_content/projects";

export const handler = define.handlers({
	GET(context) {
		context.state.title = "Projects";
		return page();
	},
});

export default define.page(async () => {
	const projects: JSX.Element[] = [];

	for await (const entry of Deno.readDir(PROJECTS_DIRECTORY)) {
		const slug = entry.name.slice(0, -3);
		const path = `../../${PROJECTS_DIRECTORY}/${entry.name}`;
		const { title } = (await import(path)).frontmatter as Frontmatter;

		projects.push(
			<li>
				<a href={`/projects/${slug}`}>{title}</a>
			</li>,
		);
	}

	return (
		<>
			<h1>Projects</h1>
			<ul>{projects}</ul>
		</>
	);
});
