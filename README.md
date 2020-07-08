# DLx JavaScript Library

A JavaScript library for working with linguistic data in [DLx format][Daffodil]. For browser and Node.

[Digital Linguistics][website] (DLx) is the science of the digital data management of linguistic data, of the kind typically produced during language documentation projects. This repository contains a JavaScript library for working with linguistic data in the [Data Format for Digital Linguistics][Daffodil] (Daffodil). It includes models for various linguistic objects, useful data and constants, and other utilities for working with language data.

[![npm version](https://img.shields.io/npm/v/@digitallinguistics/javascript.svg)][npm]
[![npm downloads](https://img.shields.io/npm/dt/@digitallinguistics/javascript.svg)][npm]
[![GitHub issues](https://img.shields.io/github/issues/digitallinguistics/javascript.svg)][issues]
[![GitHub test workflow status](https://github.com/digitallinguistics/javascript/workflows/tests/badge.svg)][tests]
[![Zenodo DOI](https://zenodo.org/badge/180070191.svg)][Zenodo]
[![GitHub](https://img.shields.io/github/license/digitallinguistics/javascript.svg)][license]
[![GitHub stars](https://img.shields.io/github/stars/digitallinguistics/javascript.svg?style=social)][GitHub]

[View the API documentation for this library.][docs]

Maintained by [Daniel W. Hieber][personal] (University of California, Santa Barbara). Please cite this library using the following model:

> Hieber, Daniel W. 2020. @digitallinguistics/javascript. DOI:[10.5281/zenodo.597714][Zenodo].

## Contents

* [Getting Help & Contributing](#getting-help--contributing)
* [Usage](#usage)
* [API Documentation][docs]

## Getting Help & Contributing

* Have a question? [Ask it here.][question]

* Want to request a feature or improvement? [Make a feature request here.][feature]

* Found a bug or other problem? [File a bug report here.][report-issue]

* Want to contribute code to the project? [Check out the contributing guidelines.][contributing]

## Overview

The DLx JavaScript library has the following exports. See the [API documentation][docs] for complete details on the contents of this library.

Export             | Description
-------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
`core`             | Base classes and other code reused across this library. Most users will not need to use this module.
`models`           | A collection of objects representing common linguistic objects, such as `Language`, `Lexeme`, etc. These have various utility functions attached to them, and ensure that their data is valid according to the [DLx Data Format][Daffodil].
`utilities`        | Assorted utilities for working with data in DLx format
`utilities/regexp` | Useful regular expressions (e.g. `languageTag.js`, `ISO.js`)
`utilities/types`  | Type-checking methods (e.g. `isLanguageTag.js`, `isISO.js`)

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

5. You can also import standalone submodules and files, rather than the entire library:

  ```js
  import types       from '@digitallinguistics/javascript/types';
  import punctuation from '@digitallinguistics/javascript/models/Language.js';
  ```

6. See the [API documentation][docs] for complete details on using the library.

[Babel]:        https://babeljs.io/
[contributing]: https://github.com/digitallinguistics/javascript/blob/master/.github/CONTRIBUTING.md
[Daffodil]:     https://format.digitallinguistics.io
[docs]:         https://developer.digitallinguistics.io/javascript
[feature]:      https://github.com/digitallinguistics/javascript/issues/new?assignees=&labels=feature&template=feature-request.md&title=
[GitHub]:       https://github.com/digitallinguistics/javascript
[issues]:       https://github.com/digitallinguistics/javascript/issues
[license]:      https://github.com/digitallinguistics/javascript/blob/master/LICENSE.md
[npm]:          https://www.npmjs.com/package/@digitallinguistics/javascript
[report-issue]: https://github.com/digitallinguistics/javascript/issues/new?assignees=&labels=bug&template=bug-report.md&title=
[personal]:     https://danielhieber.com
[question]:     https://github.com/digitallinguistics/javascript/issues/new?assignees=&labels=question&template=question.md&title=
[releases]:     https://github.com/digitallinguistics/javascript/releases
[tests]:        https://github.com/digitallinguistics/javascript/actions
[webpack]:      https://webpack.js.org/
[website]:      https://digitallinguistics.io
[Zenodo]:       https://zenodo.org/badge/latestdoi/180070191
