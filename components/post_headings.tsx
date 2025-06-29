import type { Frontmatter } from "../routes/projects/index.tsx";

export default function ({ title, subtitle }: Frontmatter) {
	if (subtitle) {
		return (
			<hgroup>
				<h1>{title}</h1>
				<p>{subtitle}</p>
			</hgroup>
		);
	}

	return <h1>{title}</h1>;
}
