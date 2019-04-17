# DLx JavaScript Library

A JavaScript library for working with linguistic data in DLx format. For browser and Node.

[Digital Linguistics][website] (DLx) is the science of the digital data management of linguistic data, of the kind typically produced during language documentation projects. This repository contains a JavaScript library for working with linguistic data in the [Data Format for Digital Linguistics][format] (Daffodil). It includes models for various linguistic objects, useful data and constants, and other utilities for working with language data.

[![npm version](https://img.shields.io/npm/v/@digitallinguistics/javascript.svg)][npm]
[![npm downloads](https://img.shields.io/npm/dt/@digitallinguistics/javascript.svg)][npm]
[![GitHub issues](https://img.shields.io/github/issues/digitallinguistics/javascript.svg)][issues]
[![GitHub](https://img.shields.io/github/license/digitallinguistics/javascript.svg)][license]
[![GitHub stars](https://img.shields.io/github/stars/digitallinguistics/javascript.svg?style=social)][GitHub]

[View the API documentation for this library.][docs]

Maintained by [Daniel W. Hieber][personal] (University of California, Santa Barbara).

## Contents

* [Contributing](#getting-help--contributing)
* [Usage](#usage)
* [API Documentation][docs]

## Getting Help & Contributing

* Have a question? [Ask it here.][open]

* Want to request a feature or improvement? [Make a feature request here.][open]

* Found a bug or other problem? [File a bug report here.][open]

* Want to contribute code to the project? [Check out the contributing guidelines.][contributing]

## Usage

1. Install using npm (`npm i @digitallinguistics/javascript`) or yarn (`yarn add @digitallinguistics/javascript`), or download the library from the [releases page][releases] and include the files you need in your project.

2. If your project supports ES modules, you can import the DLx JavaScript library directly from `/src/index.mjs`.

```js
import dlx from './src/index.mjs';
```

```html
<script src=./src/index.mjs type=module></script>
```

3. You can also consume this library as a CommonJS module or AMD module by importing `dlx.mjs` (located in the project root).

```js
import dlx from './dlx.mjs';
// OR
const dlx = require(`./dlx.mjs`);
```

```html
<script src=./dlx.mjs></script>
```

4. Use the library in your code:

```js
const { models } = dlx;
const { Lexeme } = models;

const lexeme = new Lexeme({/* lexeme data */})
```

5. See the [API documentation][docs] for complete details on using the library.

**Notes:**

* The JavaScript files in this library use an `.mjs` extension, so the library can be imported in Node (using the `--experimental-modules` flag) or the browser.

* This library is written using the latest JavaScript syntax, so you might need to compile your code using [Babel][Babel] if you import `/src/index.mjs` directly.

* If you are using this library as a bundled dependency, you can import directly from `src/index.mjs`.

* You can also import standalone submodules, rather than importing the entire library, thus reducing the size of your library:

```js
import dlx from './src/data/punctuation.mjs';
```

[Babel]:        https://babeljs.io/
[contributing]: https://github.com/digitallinguistics/javascript/blob/master/.github/CONTRIBUTING.md
[docs]:         https://developer.digitallinguistics.io/javascript
[format]:       https://format.digitallinguistics.io
[GitHub]:       https://github.com/digitallinguistics/javascript
[issues]:       https://github.com/digitallinguistics/javascript/issues
[license]:      https://github.com/digitallinguistics/javascript/blob/master/LICENSE.md
[npm]:          https://www.npmjs.com/package/@digitallinguistics/javascript
[open]:         https://github.com/digitallinguistics/javascript/issues/new
[personal]:     https://danielhieber.com
[releases]:     https://github.com/digitallinguistics/javascript/releases
[website]:      https://digitallinguistics.io
