export default function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("**/*.svg");
	eleventyConfig.addPassthroughCopy("**/*.css");
	eleventyConfig.addPassthroughCopy("**/*.woff2");
	eleventyConfig.addPassthroughCopy("**/*.jpg");
	eleventyConfig.addPassthroughCopy("**/*.png");
}
