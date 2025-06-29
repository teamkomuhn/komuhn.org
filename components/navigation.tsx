import Breadcrumbs from "../components/breadcrumbs.tsx";

export default function ({ pathname }: { pathname: string }) {
	return (
		<nav>
			<Breadcrumbs pathname={pathname} />

			<details>
				<summary></summary>

				<menu>
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
						<a href="TODO">Substack</a>
					</li>
				</menu>
			</details>
		</nav>
	);
}
