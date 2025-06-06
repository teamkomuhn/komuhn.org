import type { JSX } from "preact/jsx-runtime";
import { page } from "@fresh/core";
import { parse } from "@std/path";
import { extractYaml } from "@std/front-matter";
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

export const PROJECTS_DIRECTORY = "content/projects";

export const handler = define.handlers({
	GET(context) {
		context.state.title = "Projects";
		return page();
	},
});

export default define.page(async () => {
	const projects: JSX.Element[] = [];

	for await (const entry of Deno.readDir(PROJECTS_DIRECTORY)) {
		const slug = parse(entry.name).name;
		const path = `${PROJECTS_DIRECTORY}/${entry.name}`;
		const content = await Deno.readTextFile(path);
		const frontmatter = extractYaml<Frontmatter>(content).attrs;

		projects.push(
			<li key={slug}>
				<a href={`/projects/${slug}`}>{frontmatter.title}</a>
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
