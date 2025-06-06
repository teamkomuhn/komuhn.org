import { define } from "../utils.ts";

export default define.page((context) => {
	return (
		<html lang="en">
			<head>
				<meta name="viewport" content="width=device-width" />
				<title>{context.state.title}</title>
				<link rel="stylesheet" href="/styles.css" />
			</head>

			<body>
				<header>
					<nav>
						<a href="/">
							<img src=":heavysob:" />
						</a>

						<p>
							komuhn.org
							<a href={context.url.pathname}>{context.url.pathname}</a>
						</p>

						<ul>
							<li>
								<a href="/projects">Projects</a>
							</li>

							<li>
								<a href="/proposals">Proposals</a>
							</li>

							<li>
								<a href="/team">Team</a>
							</li>

							<li>
								<a href="/contact">Contact</a>
							</li>

							<li>
								<a href="/learnings">Learnings</a>
							</li>

							<li>
								<a href=":heavysob:">Substack</a>
							</li>
						</ul>
					</nav>
				</header>

				<main>
					<context.Component />
				</main>
			</body>
		</html>
	);
});
