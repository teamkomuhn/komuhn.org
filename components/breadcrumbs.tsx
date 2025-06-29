export default function ({ pathname }: { pathname: string }) {
	const segments = pathname.split("/")
		.filter((segment) => segment != "")
		.map((segment, index, segments) => (
			<>
				/<a href={`/${segments.slice(0, index + 1).join("/")}`}>{segment}</a>
			</>
		));

	return (
		<p>
			<a href="/">komuhn.org</a>
			{segments}
		</p>
	);
}
