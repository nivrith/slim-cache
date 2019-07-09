# slim-cache

[![CircleCI](https://circleci.com/gh/nivrith/slim-cache/tree/master.svg?style=svg)](https://circleci.com/gh/nivrith/slim-cache/tree/master)
[![NPM Downloads](https://img.shields.io/npm/dw/slim-cache.svg)](https://www.npmjs.com/package/slim-cache)
[![node](https://img.shields.io/node/v/slim-cache.svg)](https://www.npmjs.com/package/slim-cache)
[![License MIT](https://img.shields.io/github/license/nivrith/slim-cache.svg)](https://github.com/nivrith/slim-cache/blob/master/LICENSE)

Super Fast Lightweight Cache with a Map like interface

## Highlights

- Super Fast

- Written in Typescript

- Easy Map Like Interface

## Usage

> Super Fast Lightweight Cache with a Map like interface

```js

  import SlimCache from 'slim-cache';

  cache = new SlimCache(); // creates new cache with Object without a prototype
  cache.set('hello', 'world');
  cache.get('hello'); // 'world'
  cache.has('hello'); // true
  cache.clear('hello'); //true
  cache.isEmpty(); // true
  cache.set('hello', 'world');
  cache.clean(); // Clears every key of the cache rendering it empty
  cache.isEmpty(); // true
  cache.flush({'new': 'cache'}); // replaces internal cache object with user provided object
  cache.get('new'); // cache
```

## License

MIT © [Nivrith Mandayam Gomatam](https://au.linkedin.com/in/nivrith-gomatam-43bb7aa5)
