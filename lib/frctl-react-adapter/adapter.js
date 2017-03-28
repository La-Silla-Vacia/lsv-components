const babel = require('babel-core');
const debug = require('debug')('fain:frctl-react-adapter');
const Adapter = require('@frctl/fractal').Adapter;
const preactRender = require('preact-render-to-string');
const { h, Component } = require('preact');

const vm = require('vm');

const { cleanFilepath } = require('./utils');

const babelOptions = {
  babelrc: false,
  presets: ['es2015', 'react', 'stage-2'],
  plugins: [['transform-react-jsx', { 'pragma': 'h' }]]
};

function compile(code) {
  // after first compilation, require will be hooked to use babel
  // because it is shared with the vm
  const result = babel.transform(code, babelOptions);
  return result.code;
}

function getSandbox() {
  return {
    exports: {},
    process: { env: { BABEL_DISABLE_CACHE: 1, NODE_ENV: 'production' } },
    require,
    window: { navigator: { userAgent: 'Node' } },
  };
}

function clearRequireCache() {
  debug(Object.keys(require.cache).filter(id => !/node_modules/.test(id)));
  Object.keys(require.cache)
    .filter(id => /packages\/fain\/(?!node_modules)/.test(id))
    .forEach(id => delete require.cache[id]);
}

function compileComponent(tplPath, tplCode) {
  clearRequireCache();
  debug(`COMPILE: ${cleanFilepath(tplPath)}`);
  const sandbox = getSandbox();
  vm.runInNewContext(`${compile(tplCode)}`, sandbox);
  const MyComponent = sandbox.exports.default;
  return MyComponent;
}

class PreactAdapter extends Adapter {
  constructor(engineName, instance, source, app) {
    super(instance, source);
    this.fractal = app;
    this.engineName = engineName;
    this.instance = instance;
    this.source = source;
    this.cache = {};
  }

  render(tplPath, tplCode, tplContext, meta) {
    debug(`RENDERING: ${cleanFilepath(tplPath)}`);

    try {
      const MyComponent = compileComponent(tplPath, tplCode);
      const { engineName, fractal, instance, source } = this;
      const props = Object.assign({},
        { engineName, fractal, instance, source, filePath: tplPath, meta },
        tplContext
      );

      // const element = React.createElement(Component, props);
      const html = preactRender(h(MyComponent, props));
      return Promise.resolve(html);
      // return Promise.resolve('<div>hoi</div>');
    } catch (error) {
      debug(error);
      return Promise.reject(error.message);
    }
  }
}

module.exports = PreactAdapter;
