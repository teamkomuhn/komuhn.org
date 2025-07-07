import { define } from "../utils.ts";
import Header from "../components/header.tsx";
import Footer from "../components/footer.tsx";

export default define.page((context) => {
	return (
		<html lang="en">
			<head>
				<meta name="viewport" content="width=device-width" />
				<title>{context.state.title}</title>
				<link rel="stylesheet" href="/styles.css" />
			</head>

			<body>
				<Header pathname={context.url.pathname} />

				<main>
					<context.Component />
				</main>

				<Footer />
			</body>
		</html>
	);
});
