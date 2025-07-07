import Logo from "./logo.tsx";
import Breadcrumbs from "./breadcrumbs.tsx";
import Navigation from "./navigation.tsx";

export default function ({ pathname }: { pathname: string }) {
	return (
		<header>
			<Logo />
			<Breadcrumbs pathname={pathname} />

			<details>
				<summary></summary>
				<Navigation />
			</details>
		</header>
	);
}
