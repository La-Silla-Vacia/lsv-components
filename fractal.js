const mandelbrot = require('@frctl/mandelbrot')({
  favicon: '/assets/icons/icon.ico',
  lang: 'es',
  styles: ['default', '/assets/styles/theme.css'],
  static: {
    mount: 'fractal',
  },
});

const fractal = require('@frctl/fractal').create();
const reactAdapter = require('./lib/frctl-react-adapter');

const paths = {
  build: `${__dirname}/www`,
  src: `${__dirname}/src`,
  static: `${__dirname}/tmp`,
};

const mdAbbr = require('markdown-it-abbr');
const mdFootnote = require('markdown-it-footnote');
const md = require('markdown-it')({
  html: true,
  xhtmlOut: true,
  typographer: true,
}).use(mdAbbr).use(mdFootnote);
const nunjucksDate = require('nunjucks-date');
const nunjucks = require('@frctl/nunjucks')({
  filters: {
    date: nunjucksDate,
    markdown(str) {
      return md.render(str);
    },
    markdownInline(str) {
      return md.renderInline(str);
    },
    slugify(str) {
      return str.toLowerCase().replace(/[^\w]+/g, '');
    },
    stringify() {
      return JSON.stringify(this, null, '\t');
    },
  },
  paths: [`${paths.static}/assets/vectors`],
});

// Project config
fractal.set('project.title', 'Web components of La Silla Vacía');

// Components config
// fractal.components.engine(nunjucks);
fractal.components.engine(reactAdapter);
fractal.components.set('default.preview', '@preview');
fractal.components.set('default.status', null);
fractal.components.set('ext', '.jsx');
fractal.components.set('path', `${paths.src}/components`);

// Docs config
fractal.docs.engine(nunjucks);
fractal.docs.set('ext', '.md');
fractal.docs.set('path', `${paths.src}/docs`);

// Web UI config
fractal.web.theme(mandelbrot);
fractal.web.set('static.path', paths.static);
fractal.web.set('builder.dest', paths.build);
fractal.web.set('builder.urls.ext', null);

// Export config
module.exports = fractal;
