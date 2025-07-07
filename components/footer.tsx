import Logo from "./logo.tsx";
import Navigation from "./navigation.tsx";

export default function () {
	return (
		<footer>
			<div>
				<Logo />
				<h2>Komuhn</h2>
			</div>

			<Navigation />

			<address>
				Largo dos Galeões, 1<br />
				2520-245 Peniche<br />
				Portugal<br />
				<br />
				<a href="mailto:team@komuhn.org">team@komuhn.org</a>
			</address>

			<menu>
				<li>
					<a href="https://substack.com/@komuhn">
						<img alt="Substack" src="/logos/substack.svg" />
					</a>
				</li>

				<li>
					<a href="https://github.com/teamkomuhn">
						<img alt="GitHub" src="/logos/github.svg" />
					</a>
				</li>

				<li>
					<a href="https://linkedin.com/company/komuhn">
						<img alt="LinkedIn" src="/logos/linkedin.svg" />
					</a>
				</li>

				<li>
					<a href="https://instagram.com/komuhn">
						<img alt="Instagram" src="/logos/instagram.svg" />
					</a>
				</li>
			</menu>
		</footer>
	);
}
