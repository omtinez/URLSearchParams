# Isomorphic URLSearchParams Implementation

## status

WIP

## motivation

implementation of URLSearchParams of https://url.spec.whatwg.org/ in pure javascript.
polyfill for browser, and implement for node.js.
make it isomorphic.

## install

```sh
$ npm install urlsearchparams
```

## build and test

```sh
$ npm install
$ npm test
```

and also open test/index.html in your browser and see console.


## for TypeScript

use [urlsearchparams.d.ts](./urlsearchparams.d.ts)

other types which this scripts depends on are in [types](./types) directory.

alternatively, install via npm and import using:

```typescript
import { URLSearchParams } from "urlsearchparams";
```

this might require you to use `--moduleResolution node` as a compiler option.


## release process

- develop/maintain on master branch
- if finished, bump version to new one in package.json
- checkout release and merge master --no-ff
- build via npm test
- commit build
- add tag
- push to github
- npm publish

## License

The MIT License (MIT)

Copyright (c) 2013 Jxck

Copyright (c) 2017 omtinez
