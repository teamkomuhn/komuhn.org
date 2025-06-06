import type { Root, Yaml } from "npm:@types/mdast@^4.0.4";
import { parse } from "@std/yaml";
import { type Transformer, unified } from "unified";
import remark_parse from "remark-parse";
import remark_frontmatter from "remark-frontmatter";
import remark_smartypants from "remark-smartypants";
import remark_rehype from "remark-rehype";
import rehype_stringify from "rehype-stringify";
import { mdxMd } from "micromark-extension-mdx-md";
import { mdxJsx } from "micromark-extension-mdx-jsx";
import { HttpError, page } from "@fresh/core";
import { define } from "../../utils.ts";
import { type Frontmatter, PROJECTS_DIRECTORY } from "./index.tsx";

function remark_parse_frontmatter(): Transformer<Root> {
	return (tree, file) => {
		file.data.frontmatter = parse((tree.children.shift()! as Yaml).value);
	};
}

const pipeline = unified()
	.use(remark_parse)
	.use(remark_frontmatter)
	.use(remark_parse_frontmatter)
	.use(remark_smartypants, { backticks: false, dashes: "oldschool" })
	.use(remark_rehype)
	.use(rehype_stringify);

const data = pipeline.data();
data.micromarkExtensions ??= [];
data.micromarkExtensions.push(mdxMd(), mdxJsx());

export const handler = define.handlers({
	async GET(context) {
		const { slug } = context.params;
		let content: string;

		try {
			content = await Deno.readTextFile(`${PROJECTS_DIRECTORY}/${slug}.md`);
		} catch (error) {
			throw error instanceof Deno.errors.NotFound ? new HttpError(404) : error;
		}

		const file = await pipeline.process(content);
		const frontmatter = file.data.frontmatter as Frontmatter;
		const html = String(file);

		context.state.title = frontmatter.title;

		return page({ frontmatter, html });
	},
});

export default define.page<typeof handler>((context) => {
	const { frontmatter, html } = context.data;

	return (
		<article>
			<header>
				<h1>{frontmatter.title}</h1>
			</header>

			<div
				// deno-lint-ignore react-no-danger
				dangerouslySetInnerHTML={{ __html: html }}
			/>
		</article>
	);
});
