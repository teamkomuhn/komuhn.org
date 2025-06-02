import { define } from "../utils.ts";

export default define.page(({ Component }) => {
	return (
		<html lang="en">
			<head>
				<meta name="viewport" content="width=device-width" />
				<title>Komuhn</title>
				<link rel="stylesheet" href="/styles.css" />
			</head>

			<body>
				<main>
					<Component />
				</main>
			</body>
		</html>
	);
});
