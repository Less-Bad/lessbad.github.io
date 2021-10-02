const { DateTime } = require("luxon");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItFootnote = require("markdown-it-footnote");
const pluginToc = require('eleventy-plugin-nesting-toc');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginToc, {
    tags: ['h2', 'h3', 'h4', 'h5', 'h6'],
    headingText: 'List of Contents'
  });

  eleventyConfig.setLibrary("md", markdownIt({
      html: true
    }).use(markdownItAnchor)
    .use(markdownItFootnote)
  );

  eleventyConfig.addFilter("date", (dateObj) => {
      return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });

  return {
    dir: {
      input: "src",
    },
    pathPrefix: "/less-bad/"
  }
};
