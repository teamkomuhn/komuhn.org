// import esbuild from "esbuild";
// import mdx from "@mdx-js/esbuild";
// import remark_frontmatter from "remark-frontmatter";
// import remark_mdx_frontmatter from "remark-mdx-frontmatter";
// import remark_smartypants from "remark-smartypants";
// import unist_util_flatmap from "unist-util-flatmap";
import { App, fsRoutes, staticFiles } from "@fresh/core";
import type { State } from "./utils.ts";

// const promises: Promise<unknown>[] = [];

// function remark_flatten_image_paragraphs() {
// 	// @ts-expect-error: TODO
// 	return (tree) => {
// 		// @ts-expect-error: TODO
// 		return unist_util_flatmap(tree, (node) => {
// 			if (
// 				node.type === "paragraph" &&
// 				// @ts-expect-error: TODO
// 				node.children.every((child) =>
// 					child.type === "image" ||
// 					child.type === "mdxJsxFlowElement" ||
// 					child.type === "mdxJsxTextElement" ||
// 					child.type === "text" && child.value === "\n"
// 				)
// 			) {
// 				return node.children;
// 			}

// 			return [node];
// 		});
// 	};
// }

// const context = await esbuild.context({
// 	entryPoints: ["content/projects/**"],
// 	plugins: [
// 		mdx({
// 			jsxImportSource: "preact",
// 			remarkPlugins: [
// 				remark_frontmatter,
// 				remark_mdx_frontmatter,
// 				[remark_smartypants, { backticks: false, dashes: "oldschool" }],
// 				remark_flatten_image_paragraphs,
// 			],
// 		}),
// 	],
// 	outdir: "_content",
// 	outbase: "content",
// });

// promises.push(context.watch());

export const app = new App<State>();

app.use(staticFiles());

await fsRoutes(app, {
	loadIsland: (path) => import(`./islands/${path}`),
	loadRoute: (path) => import(`./routes/${path}`),
});

if (import.meta.main) {
	await app.listen();
}

// await Promise.all(promises);
