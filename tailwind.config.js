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
  theme: { extend: {
      maskImage: {
        'gradient-to-r': 'linear-gradient(to right, black, transparent)',
      },
    }
  },
  plugins: [],
}