export default function ({ pathname }: { pathname: string }) {
	const breadcrumbs = pathname.split("/").filter(Boolean)
		.map((segment, index, segments) => (
			<li>
				<wbr />/
				<a href={`/${segments.slice(0, index + 1).join("/")}`}>{segment}</a>
			</li>
		));

	return (
		<nav>
			<ol>
				<li>
					<a href="/">komuhn.org</a>
				</li>

				{breadcrumbs}
			</ol>
		</nav>
	);
}
