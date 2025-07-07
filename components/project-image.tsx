import type { Frontmatter } from "../routes/projects/index.tsx";

const MARKDOWN_IMAGE = /^!\[(?<alt>.*)\]\((?<src>.*)\)$/;

export default function ({ image }: Frontmatter) {
	if (!image) return;
	const { alt, src } = image.match(MARKDOWN_IMAGE)!.groups!;
	return <img alt={alt} src={src} />;
}
