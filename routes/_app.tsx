import Navigation from "../components/navigation.tsx";
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
					<img alt="TODO" src="/komuhn.svg" />
					<Navigation pathname={context.url.pathname} />
				</header>

				<main>
					<context.Component />
				</main>
			</body>
		</html>
	);
});
