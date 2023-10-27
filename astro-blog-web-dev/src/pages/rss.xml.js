import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function get() {
	return rss({
		title: "Introduction to Web Development",
		description: "Intro to Web Development",
		site: "https://jun-webdev.netlify.app/",
		items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
		customData: `<language>en-us</language>`,
	});
}
