const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItFootnote = require("markdown-it-footnote");

module.exports = function(eleventyConfig) {
  //FIXME: preprocess
  eleventyConfig.addPassthroughCopy("src/styles");

  eleventyConfig.setLibrary("md", markdownIt({
      html: true
    }).use(markdownItAnchor)
    .use(markdownItFootnote)
  );

  return {
    dir: {
      input: "src"
    }
  }
};
