console.log(__dirname);

module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.md",
    "./assets/**/*.js",
    "./archetypes/**/*.md",
    "./**/*.html",
    "./**/*.md"
  ],
  theme: { extend: {} },
  plugins: [],
}