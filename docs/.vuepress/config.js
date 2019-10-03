const container = require("markdown-it-container");

function createContainer(type, defaultTitle) {
	return [
		container,
		type,
		{
			render(tokens, idx) {
				const token = tokens[idx];
				const info = token.info
					.trim()
					.slice(type.length)
					.trim();
				const title = info || defaultTitle;
				if (token.nesting === 1) {
					return `<div class="${type} custom-block"><p class="custom-block-title">${title}</p>\n`;
				} else {
					return `</div>\n`;
				}
			}
		}
	];
}

module.exports = {
	title: "Denis Tsoi",
	description: "Code to eat 🍞",
	postcss: {
		plugins: [
			require("tailwindcss")("./tailwind.config.js"),
			require("autoprefixer")
		]
	},
	themeConfig: {
		nav: [
			{ text: "CV", link: "/cv/" }
			// { text: "talks", link: "https://denistsoi.github.io/talks/" },
			// { text: "Github", link: "https://github.com/denistsoi" }
		]
	},
	markdown: {
		// options for markdown-it-anchor
		anchor: { permalink: false },
		// options for markdown-it-toc
		toc: { includeLevel: [1, 2] },
		extendMarkdown: md => {
			// use more markdown-it plugins!
			md.use(...createContainer("tip", "TIP"));
		}
	}
};
