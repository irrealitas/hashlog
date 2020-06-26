module.exports = {
  plugins: {
    'postcss-import': { path: './assets/css'},
    'postcss-nested': {},
    'css-mqpacker': { sort: true },
    'autoprefixer': {cascade: false},
    'postcss-flexbugs-fixes': {},
    // 'cssnano': { reduceIdents: false, normalizeUrl: { stripWWW: false }},
  }
}
