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

  cache = new SlimCache(); // creates new cache
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

## Benchmark

All benchmarks were run using [benchmark](https://www.npmjs.com/package/benchmark)

### Memoization

[fast-memoize](https://npmjs.com/package/fast-memoize) was used with various caches to memoize
a standard recursive fibonacci function

Benchmark was run for all the memoized functions to find 40th fibonacci number

``` js

┌──────────────┬─────────────┬──────────────────────────┬─────────────┐
│ NAME         │ OPS/SEC     │ RELATIVE MARGIN OF ERROR │ SAMPLE SIZE │
├──────────────┼─────────────┼──────────────────────────┼─────────────┤
│ slim-cache   │ 402,727,692 │ ± 0.35%                  │ 93          │
├──────────────┼─────────────┼──────────────────────────┼─────────────┤
│ object cache │ 391,995,589 │ ± 0.61%                  │ 94          │
├──────────────┼─────────────┼──────────────────────────┼─────────────┤
│ map-cache    │ 388,972,451 │ ± 1.58%                  │ 92          │
├──────────────┼─────────────┼──────────────────────────┼─────────────┤
│ fast-memoize │ 334,922,846 │ ± 0.35%                  │ 91          │
├──────────────┼─────────────┼──────────────────────────┼─────────────┤
│ native map   │ 265,225,627 │ ± 0.56%                  │ 90          │
├──────────────┼─────────────┼──────────────────────────┼─────────────┤
│ vanilla      │ 1           │ ± 6.91%                  │ 7           │
└──────────────┴─────────────┴──────────────────────────┴─────────────┘
```

#### Legend

- slim-cache : fibonacci function memoized using fast-memoize with SlimCache instance

- object cache: fibonacci function memoized using fast-memoize with Empty Object based cache

- map-cache: fibonacci function memoized using fast-memoize with [MapCache](https://npmjs.com/package/map-cache)
 instance

- fast-memoize: default fast-memoize cache

- native map: fibonacci function memoized using fast-memoize with Native ES6 Map based cache

- vanilla: fibonacci function without memoization

### Methods

#### has

```js
┌────────────┬─────────────┬──────────────────────────┬─────────────┐
│ NAME       │ OPS/SEC     │ RELATIVE MARGIN OF ERROR │ SAMPLE SIZE │
├────────────┼─────────────┼──────────────────────────┼─────────────┤
│ slim-cache │ 902,468,492 │ ± 1.63%                  │ 93          │
├────────────┼─────────────┼──────────────────────────┼─────────────┤
│ native map │ 694,384,457 │ ± 0.62%                  │ 95          │
├────────────┼─────────────┼──────────────────────────┼─────────────┤
│ map-cache  │ 686,595,656 │ ± 0.74%                  │ 90          │
├────────────┼─────────────┼──────────────────────────┼─────────────┤
│ object     │ 184,851,669 │ ± 3.27%                  │ 86          │
└────────────┴─────────────┴──────────────────────────┴─────────────┘
```

#### get

```js

┌────────────┬─────────────┬──────────────────────────┬─────────────┐
│ NAME       │ OPS/SEC     │ RELATIVE MARGIN OF ERROR │ SAMPLE SIZE │
├────────────┼─────────────┼──────────────────────────┼─────────────┤
│ slim-cache │ 917,775,700 │ ± 0.42%                  │ 94          │
├────────────┼─────────────┼──────────────────────────┼─────────────┤
│ map-cache  │ 914,493,164 │ ± 0.46%                  │ 92          │
├────────────┼─────────────┼──────────────────────────┼─────────────┤
│ object     │ 913,072,253 │ ± 0.54%                  │ 91          │
├────────────┼─────────────┼──────────────────────────┼─────────────┤
│ native map │ 667,015,102 │ ± 1.69%                  │ 91          │
└────────────┴─────────────┴──────────────────────────┴─────────────┘
```

### set

```js
┌──────────────┬─────────────┬──────────────────────────┬─────────────┐
│ NAME         │ OPS/SEC     │ RELATIVE MARGIN OF ERROR │ SAMPLE SIZE │
├──────────────┼─────────────┼──────────────────────────┼─────────────┤
│ object cache │ 916,023,083 │ ± 0.39%                  │ 96          │
├──────────────┼─────────────┼──────────────────────────┼─────────────┤
│ slim-cache   │ 912,787,773 │ ± 0.50%                  │ 94          │
├──────────────┼─────────────┼──────────────────────────┼─────────────┤
│ map-cache    │ 911,402,606 │ ± 0.56%                  │ 96          │
├──────────────┼─────────────┼──────────────────────────┼─────────────┤
│ native map   │ 144,171,162 │ ± 0.48%                  │ 91          │
└──────────────┴─────────────┴──────────────────────────┴─────────────┘

```

## License

MIT © [Nivrith Mandayam Gomatam](https://au.linkedin.com/in/nivrith-gomatam-43bb7aa5)
