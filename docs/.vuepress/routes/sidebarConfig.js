const fs = require("fs-extra");
const path = require("path");

const getAllMarkdownFileNames = (dir) => {
  const files = fs.readdirSync(dir);
  const reg = /^(question)[\s\S]*(.md)$/;
  return files.filter((file) => reg.test(file));
};

const HTML_PATH = path.resolve(__dirname, "../../frontend/html");
const CSS_PATH = path.resolve(__dirname, "../../frontend/css");

module.exports = {
  sidebar: {
    "/frontend/html/": getAllMarkdownFileNames(HTML_PATH),
    "/frontend/css/": getAllMarkdownFileNames(CSS_PATH)
  },
};
