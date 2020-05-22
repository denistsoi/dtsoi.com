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
          return `<div class="${type} custom-block text-sm md:text-base"><p class="custom-block-title">${title}</p>\n`;
        } else {
          return `</div>\n`;
        }
      },
    },
  ];
}

module.exports = {
  base: "/",
  title: "Denis Tsoi",
  description: "Code to eat 🍞",
  head: [
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/assets/favicons/apple-touch-icon.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/assets/favicons/favicon-32x32.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/assets/favicons/favicon-16x16.png",
      },
    ],
    ["link", { rel: "manifest", href: "/assets/favicons/site.webmanifest" }],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/assets/favicons/safari-pinned-tab.svg",
        color: "#3a0839",
      },
    ],
    ["link", { rel: "shortcut icon", href: "/assets/favicons/favicon.ico" }],
    ["meta", { name: "msapplication-TileColor", content: "#3a0839" }],
    [
      "meta",
      {
        name: "msapplication-config",
        content: "/assets/favicons/browserconfig.xml",
      },
    ],
    ["meta", { name: "theme-color", content: "#ffffff" }],
  ],
  postcss: {
    plugins: [
      require("tailwindcss")("./tailwind.config.js"),
      require("autoprefixer"),
    ],
  },
  themeConfig: {
    nav: [
      { text: "cv", link: "/cv/" },
      { text: "refugeek", link: "/rg/" },
      { text: "templates", link: "/templates/" },
    ],
  },
  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },
    // options for markdown-it-toc
    toc: { includeLevel: [1, 2] },
    extendMarkdown: (md) => {
      // use more markdown-it plugins!
      md.use(...createContainer("tip", "TIP")).use(
        ...createContainer("job", "")
      );
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@assets": "theme/assets/",
      },
    },
  },
};
