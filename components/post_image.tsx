import type { Frontmatter } from "../routes/projects/index.tsx";

const MARKDOWN_IMAGE = /^!\[(?<alt_text>.*)\]\((?<source>.*)\)$/;

export default function ({ image }: Frontmatter) {
	if (!image) return;
	const { alt_text, source } = image.match(MARKDOWN_IMAGE)!.groups!;
	return <img alt={alt_text} src={source} />;
}
