import type { Frontmatter } from "../routes/projects/index.tsx";

const MARKDOWN_LINK = /^\[(?<text>.*)\]\((?<url>.*)\)$/;

export default function (
	{ topics, timeline, region, links, partners }: Frontmatter,
) {
	if (!(topics || timeline || region || links || partners)) return;

	return (
		<details>
			<summary></summary>

			<table>
				{topics && (
					<tr>
						<th>Topics</th>
						<td>{topics}</td>
					</tr>
				)}

				{timeline && (
					<tr>
						<th>Timeline</th>

						<td
							// deno-lint-ignore react-no-danger
							dangerouslySetInnerHTML={{
								__html: timeline.replaceAll(
									/\d{4}/g,
									'<time datetime="$&">$&</time>',
								),
							}}
						/>
					</tr>
				)}

				{region && (
					<tr>
						<th>Region</th>
						<td>{region}</td>
					</tr>
				)}

				{links && (
					<tr>
						<th>Links</th>

						<td>
							<ul>
								{links.map((link) => {
									const { text, url } = link.match(MARKDOWN_LINK)!.groups!;

									return (
										<li key={url}>
											<a href={url}>{text}</a>
										</li>
									);
								})}
							</ul>
						</td>
					</tr>
				)}

				{partners && (
					<tr>
						<th>Partners</th>

						<td>
							<ul>
								{partners.map((partner) => <li key={partner}>{partner}</li>)}
							</ul>
						</td>
					</tr>
				)}
			</table>
		</details>
	);
}
