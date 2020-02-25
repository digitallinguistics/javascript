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

* Have a question? [Ask it here.][open-issue]

* Want to request a feature or improvement? [Make a feature request here.][open-issue]

* Found a bug or other problem? [File a bug report here.][open-issue]

* Want to contribute code to the project? [Check out the contributing guidelines.][contributing]

## Usage

1. Install using npm (`npm i @digitallinguistics/javascript`) or yarn (`yarn add @digitallinguistics/javascript`), or download the library from the [releases page][releases] and include the files you need in your project.

2. In Node, import the library as follows:

  ```js
  import dlx from '@digitallinguistics/javascript';
  ```

3. In HTML, link `src/index.js` in a script tag:

  ```html
  <script src=dlx/src/index.js type=module></script>
  ```

3. If your project does not support ES modules or recent JavaScript syntax, you may need to bundle and/or transpile this module for use in your code, using libraries like [Babel][Babel] and [webpack][webpack].

4. Use the library in your code:

  ```js
  import { models } from '@digitallinguistics/javascript';

  const { Lexeme } = models;

  const lexeme = new Lexeme({/* lexeme data */})
  ```

5. You can also import standalone submodules, rather than the entire library, by importing the `index.js` file for a module, or a particular file, directly:

  ```js
  import punctuation from './dlx/src/data/punctuation.js';
  ```

6. See the [API documentation][docs] for complete details on using the library.

[Babel]:        https://babeljs.io/
[contributing]: https://github.com/digitallinguistics/javascript/blob/master/.github/CONTRIBUTING.md
[docs]:         https://developer.digitallinguistics.io/javascript
[format]:       https://format.digitallinguistics.io
[GitHub]:       https://github.com/digitallinguistics/javascript
[issues]:       https://github.com/digitallinguistics/javascript/issues
[license]:      https://github.com/digitallinguistics/javascript/blob/master/LICENSE.md
[npm]:          https://www.npmjs.com/package/@digitallinguistics/javascript
[open-issue]:   https://github.com/digitallinguistics/javascript/issues/new
[personal]:     https://danielhieber.com
[releases]:     https://github.com/digitallinguistics/javascript/releases
[website]:      https://digitallinguistics.io
[webpack]:      https://webpack.js.org/
