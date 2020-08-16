/* eslint-disable */

(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') module.exports = factory();
  else if (typeof define === 'function' && define.amd) define([], factory);
  else if (typeof exports === 'object') exports.dlx = factory();
  else root.dlx = factory();
})(this, () =>
/** ****/ (function(modules) { // webpackBootstrap
    /** ****/ // The module cache
    /** ****/
    const installedModules = {};

    /** ****/
    /** ****/ // The require function
    /** ****/
    function __webpack_require__(moduleId) {
      /** ****/
      /** ****/ // Check if module is in cache
      /** ****/
      if (installedModules[moduleId]) {
        /** ****/
        return installedModules[moduleId].exports;

        /** ****/
      }

      /** ****/ // Create a new module (and put it into the cache)
      /** ****/
      const module = installedModules[moduleId] = {

        /** ****/
        i:       moduleId,

        /** ****/
        l:       false,

        /** ****/
        exports: {},

        /** ****/
      };

      /** ****/
      /** ****/ // Execute the module function
      /** ****/
      modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

      /** ****/
      /** ****/ // Flag the module as loaded
      /** ****/
      module.l = true;

      /** ****/
      /** ****/ // Return the exports of the module
      /** ****/
      return module.exports;

      /** ****/
    }

    /** ****/
    /** ****/
    /** ****/ // expose the modules object (__webpack_modules__)
    /** ****/
    __webpack_require__.m = modules;

    /** ****/
    /** ****/ // expose the module cache
    /** ****/
    __webpack_require__.c = installedModules;

    /** ****/
    /** ****/ // define getter function for harmony exports
    /** ****/
    __webpack_require__.d = function(exports, name, getter) {
      /** ****/
      if (!__webpack_require__.o(exports, name)) {
        /** ****/
        Object.defineProperty(exports, name, {

          /** ****/
          configurable: false,

          /** ****/
          enumerable:   true,

          /** ****/
          get:          getter,

          /** ****/
        });

        /** ****/
      }

      /** ****/
    };

    /** ****/
    /** ****/ // getDefaultExport function for compatibility with non-harmony modules
    /** ****/
    __webpack_require__.n = function(module) {
      /** ****/
      const getter = module && module.__esModule ?

        /** ****/
        function getDefault() {
          return module.default;
        } :

        /** ****/
        function getModuleExports() {
          return module;
        };

      /** ****/
      __webpack_require__.d(getter, 'a', getter);

      /** ****/
      return getter;

      /** ****/
    };

    /** ****/
    /** ****/ // Object.prototype.hasOwnProperty.call
    /** ****/
    __webpack_require__.o = function(object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    };

    /** ****/
    /** ****/ // __webpack_public_path__
    /** ****/
    __webpack_require__.p = '';

    /** ****/
    /** ****/ // Load entry module and return exports
    /** ****/
    return __webpack_require__(__webpack_require__.s = 25);

    /** ****/
  })

  /** **********************************************************************/
  /** ****/
  ([

    /* 0 */
    /***/
    function(module, exports, __webpack_require__) {

      'use strict';
      const utilities = __webpack_require__(35);
      module.exports = utilities;

      /***/
    },

    /* 1 */
    /***/
    function(module, exports, __webpack_require__) {

      'use strict';
      const MultiLangString = __webpack_require__(34);
      module.exports = MultiLangString;

      /***/
    },

    /* 2 */
    /***/
    function(module, exports, __webpack_require__) {

      'use strict';
      const Note = __webpack_require__(42);
      module.exports = Note;

      /***/
    },

    /* 3 */
    /***/
    function(module, exports, __webpack_require__) {

      'use strict';
      const Tags = __webpack_require__(44);
      module.exports = Tags;

      /***/
    },

    /* 4 */
    /***/
    function(module, exports, __webpack_require__) {

      'use strict';
      const Transcription = __webpack_require__(38);
      module.exports = Transcription;

      /***/
    },

    /* 5 */
    /***/
    function(module, exports, __webpack_require__) {

      'use strict';
      const Emitter = __webpack_require__(15);
      const Model = __webpack_require__(27);
      module.exports = {
        Emitter,
        Model,
      };

      /***/
    },

    /* 6 */
    /***/
    function(module, exports, __webpack_require__) {

      'use strict';
      const LexemeReference = __webpack_require__(49);
      module.exports = LexemeReference;

      /***/
    },

    /* 7 */
    /***/
    function(module, exports, __webpack_require__) {

      'use strict';
      const Location = __webpack_require__(41);
      module.exports = Location;

      /***/
    },

    /* 8 */
    /***/
    function(module, exports, __webpack_require__) {

      'use strict';
      const Reference = __webpack_require__(43);
      module.exports = Reference;

      /***/
    },

    /* 9 */
    /***/
    function(module, exports, __webpack_require__) {

      'use strict';
      const Access = __webpack_require__(33);
      module.exports = Access;

      /***/
    },

    /* 10 */
    /***/
    function(module, exports, __webpack_require__) {

      'use strict';
      const Sentence = __webpack_require__(51);
      module.exports = Sentence;

      /***/
    },

    /* 11 */
    /***/
    function(module, exports, __webpack_require__) {

      'use strict';
      const features = __webpack_require__(29);
      const languages = __webpack_require__(30);
      const punctuation = __webpack_require__(31);
      module.exports = {
        features,
        languages,
        punctuation,
      };

      /***/
    },

    /* 12 */
    /***/
    function(module, exports, __webpack_require__) {

      'use strict';
      const Address = __webpack_require__(36);
      module.exports = Address;

      /***/
    },

    /* 13 */
    /***/
    function(module, exports, __webpack_require__) {

      'use strict';
      const LexicalRelation = __webpack_require__(50);
      module.exports = LexicalRelation;

      /***/
    },

    /* 14 */
    /***/
    function(module, exports, __webpack_require__) {

      'use strict';
      const Variant = __webpack_require__(55);
      module.exports = Variant;

      /***/
    },

    /* 15 */
    /***/
    function(module, exports, __webpack_require__) {

      'use strict';
      const Emitter = __webpack_require__(26);
      module.exports = Emitter;

      /***/
    },

    /* 16 */
    /***/
    function(module, exports, __webpack_require__) {

      'use strict';
      const Allomorph = __webpack_require__(37);
      module.exports = Allomorph;

      /***/
    },

    /* 17 */
    /***/
    function(module, exports, __webpack_require__) {

      'use strict';
      const Grapheme = __webpack_require__(39);
      module.exports = Grapheme;

      /***/
    },

    /* 18 */
    /***/
    function(module, exports, __webpack_require__) {

      'use strict';
      const Language = __webpack_require__(40);
      module.exports = Language;

      /***/
    },

    /* 19 */
    /***/
    function(module, exports, __webpack_require__) {

      'use strict';
      const Orthography = __webpack_require__(45);
      module.exports = Orthography;

      /***/
    },

    /* 20 */
    /***/
    function(module, exports, __webpack_require__) {

      'use strict';
      const Phoneme = __webpack_require__(46);
      module.exports = Phoneme;

      /***/
    },

    /* 21 */
    /***/
    function(module, exports, __webpack_require__) {

      'use strict';
      const Word = __webpack_require__(52);
      module.exports = Word;

      /***/
    },

    /* 22 */
    /***/
    function(module, exports, __webpack_require__) {

      'use strict';
      const Morpheme = __webpack_require__(53);
      module.exports = Morpheme;

      /***/
    },

    /* 23 */
    /***/
    function(module, exports, __webpack_require__) {

      'use strict';
      const Sense = __webpack_require__(54);
      module.exports = Sense;

      /***/
    },

    /* 24 */
    /***/
    function(module, exports, __webpack_require__) {

      'use strict';
      const Person = __webpack_require__(58);
      module.exports = Person;

      /***/
    },

    /* 25 */
    /***/
    function(module, exports, __webpack_require__) {

      'use strict';
      const base = __webpack_require__(5);
      const data = __webpack_require__(11);
      const models = __webpack_require__(32);
      const utilities = __webpack_require__(0);
      const dlx = {
        base,
        data,
        models,
        utilities,
      };
      dlx.utils = dlx.utilities;
      module.exports = dlx;

      /***/
    },

    /* 26 */
    /***/
    function(module, exports, __webpack_require__) {

      'use strict';
      class Emitter {
        constructor() {
          Object.defineProperty(this, 'events', {
            configurable: true,
            enumerable:   false,
            value:        new Map,
            writable:     false,
          });
        }

        emit(event, ...args) {
          if (typeof event !== 'string') throw new TypeError('The event name must be a string.');
          const runCallbacks = callbacks => Promise.all(Array.from(callbacks, cb => cb(...args)));
          const fireListeners = () => {
            const listeners = this.events.get(event);
            if (listeners) return runCallbacks(listeners);
            return Promise.resolve();
          };
          const fireAllListeners = () => {
            const listeners = this.events.get('all');
            if (listeners) return runCallbacks(listeners);
            return Promise.resolve();
          };
          return fireAllListeners().then(fireListeners);
        }

        off(event, callback) {
          if (callback) {
            const listeners = this.events.get(event);
            if (listeners) {
              listeners.delete(callback);
              if (listeners.size === 0) this.events.delete(event);
            }
          } else if (event) {
            this.events.delete(event);
          } else {
            this.events.clear();
          }
          return this;
        }

        on(event, callback, context) {
          if (typeof event !== 'string') {
            throw new TypeError('The event argument must be a string.');
          }
          if (typeof callback !== 'function') {
            throw new TypeError('Callback must be a function.');
          }
          const listener = context ? callback.bind(context) : callback;
          if (!this.events.has(event)) this.events.set(event, new Set);
          this.events.get(event).add(listener);
          return listener;
        }

        once(event, callback, context) {
          if (typeof callback !== 'function') {
            throw new TypeError('The callback must be a function.');
          }
          const listener = context ? callback.bind(context) : callback;
          const triggerAndRemove = () => {
            listener();
            this.off(event, triggerAndRemove);
          };
          this.on(event, triggerAndRemove);
          return listener;
        }

        static extend(Superclass = class Super {}) {
          return class extends Superclass {
            constructor(...args) {
              super(...args);
              const props = Object.getOwnPropertyDescriptors(Emitter.prototype);
              Object.defineProperties(this, props);
            }
          };
        }
      }
      module.exports = Emitter;

      /***/
    },

    /* 27 */
    /***/
    function(module, exports, __webpack_require__) {

      'use strict';
      const Model = __webpack_require__(28);
      module.exports = Model;

      /***/
    },

    /* 28 */
    /***/
    function(module, exports, __webpack_require__) {

      'use strict';
      const Emitter = __webpack_require__(15);
      class Model extends Emitter {
        destroy() {}
        save() {}
        get data() {
          return JSON.parse(this.json);
        }

        get json() {
          return JSON.stringify(this.toJSON(), null, 2);
        }
      }
      module.exports = Model;

      /***/
    },

    /* 29 */
    /***/
    function(module, exports, __webpack_require__) {

      'use strict';
      const airstream = ['click', 'ejective', 'implosive', 'ingressive', 'pulmonic'];
      const backness = ['front', 'near-front', 'central', 'near-back', 'back'];
      const diacritics = ['advanced', 'advanced tongue root', 'affricativized', 'alveolar', 'apical', 'aspirated', 'breathy', 'centralized', 'close', 'creaky', 'dental', 'fortis', 'fricativized', 'labialized', 'laminal', 'lateral release', 'lax', 'lenis', 'lightly aspirated', 'linguolabial', 'lowered', 'mid-centralized', 'nasal release', 'nasalized', 'no release', 'non-syllabic', 'open', 'palatalized', 'pharyngealized', 'plain', 'raised', 'retracted', 'retracted tongue root', 'retroflexed', 'rhotic', 'rounded', 'sibilant', 'syllabic', 'tense', 'unrounded', 'velarized', 'voiced', 'voiceless', 'weakly aspirated'];
      const height = ['close', 'near-close', 'close-mid', 'mid', 'open-mid', 'near-open', 'open'];
      const length = ['extra long', 'extra short', 'geminate', 'half long', 'long', 'short'];
      const manner = ['approximate', 'flap', 'fricative', 'lateral', 'nasal', 'plosive', 'tap', 'trill'];
      const place = ['bilabial', 'labiodental', 'labiovelar', 'dental', 'alveolar', 'lateral', 'post-alveolar', 'alveo-palatal', 'palato-alveolar', 'retroflex', 'palatal', 'velar', 'uvular', 'pharyngeal', 'glottal', 'epiglottal'];
      const rounding = ['compressed', 'protruded', 'rounded', 'unrounded'];
      const voicing = ['semivoiced', 'voiced', 'voiceless'];
      module.exports = {
        airstream,
        backness,
        diacritics,
        height,
        length,
        manner,
        place,
        rounding,
        voicing,
      };

      /***/
    },

    /* 30 */
    /***/
    function(module, exports, __webpack_require__) {

      'use strict';
      const English = {
        abbreviation: `eng`,
        autonym:      {
          eng: `English`,
          ipa: `ɪŋɡlɪʃ`,
        },
        glottolog: `stan1293`,
        iso:       `eng`,
        name:      {
          eng: `English`,
          fra: `anglais`,
          spa: `inglés`,
        },
        orthographies: [
          {
            abbreviation: `eng`,
            graphemes:    [
              {
                allographs: [`a`],
                form:       `A`,
              }, {
                allographs: [`b`],
                form:       `B`,
              }, {
                allographs: [`c`],
                form:       `C`,
              }, {
                allographs: [`d`],
                form:       `D`,
              }, {
                allographs: [`e`],
                form:       `E`,
              }, {
                allographs: [`f`],
                form:       `F`,
              }, {
                allographs: [`g`],
                form:       `G`,
              }, {
                allographs: [`h`],
                form:       `H`,
              }, {
                allographs: [`i`],
                form:       `I`,
              }, {
                allographs: [`j`],
                form:       `J`,
              }, {
                allographs: [`k`],
                form:       `K`,
              }, {
                allographs: [`l`],
                form:       `L`,
              }, {
                allographs: [`m`],
                form:       `M`,
              }, {
                allographs: [`n`],
                form:       `N`,
              }, {
                allographs: [`o`],
                form:       `O`,
              }, {
                allographs: [`p`],
                form:       `P`,
              }, {
                allographs: [`q`],
                form:       `Q`,
              }, {
                allographs: [`r`],
                form:       `R`,
              }, {
                allographs: [`s`],
                form:       `S`,
              }, {
                allographs: [`t`],
                form:       `T`,
              }, {
                allographs: [`u`],
                form:       `U`,
              }, {
                allographs: [`v`],
                form:       `V`,
              }, {
                allographs: [`w`],
                form:       `W`,
              }, {
                allographs: [`x`],
                form:       `X`,
              }, {
                allographs: [`y`],
                form:       `Y`,
              }, {
                allographs: [`z`],
                form:       `Z`,
              },
            ],
            name: {
              eng: `English`,
              fra: `anglais`,
              spa: `inglés`,
            },
            punctuation: [`’`, `'`, `[`, `]`, `(`, `)`, `{`, `}`, `⟨`, `⟩`, `:`, `,`, `‒`, `–`, `—`, `―`, `…`, `!`, `.`, `<`, `>`, `-`, `-`, `?`, `‘`, `’`, `“`, `”`, `"`, `;`, `/`, `&`, `*`, `@`, `\\`, `•`, `^`, `†`, `‡`, `°`, `#`, `=`, `+`, `_`, `~`, `$`, `%`, '`', `|`, `©`, `℗`, `®`, `℠`, `™`, `₳`, `₳`, `฿`, `₵`, `¢`, `₡`, `₢`, `$`, `₫`, `₯`, `֏`, `₠`, `€`, `ƒ`, `₣`, `₲`, `₴`, `₭`, `₺`, `₾`, `ℳ`, `₥`, `₦`, `₧`, `₱`, `₰`, `£`, `៛`, `₽`, `₹`, `₨`, `₪`, `৳`, `₸`, `₮`, `₩`, `¥`],
          },
        ],
      };
      const French = {
        abbreviation: `fra`,
        autonym:      {
          fra: `français`,
          ipa: `fʁɑ̃sɛ`,
        },
        glottolog: `stan1290`,
        iso:       `fra`,
        name:      {
          eng: `French`,
          fra: `français`,
          spa: `francés`,
        },
        orthographies: [
          {
            abbreviation: `fra`,
            graphemes:    [],
            name:         {
              eng: `French`,
              fra: `français`,
              spa: `francés`,
            },
            punctuation: [`.`, `,`, `:`, `«`, `»`, `—`, `;`, `!`, `?`, `'`, `-`, `_`, `°`, `(`, `)`, `{`, `}`, `[`, `]`, `<`, `>`, `&`, `*`, `#`, `$`, `£`, `%`, `=`, `|`, `/`, `\\`, `@`],
          },
        ],
      };
      const Spanish = {
        abbreviation: `spa`,
        autonym:      {
          spa: `español`,
          ipa: `espaɲol`,
        },
        glottolog: `stan1288`,
        iso:       `spa`,
        name:      {
          eng: `Spanish`,
          fra: `espagnol`,
          spa: `español`,
        },
        orthographies: [
          {
            abbreviation: `fra`,
            graphemes:    [],
            name:         {
              eng: `Spanish`,
              fra: `espagnol`,
              spa: `español`,
            },
            punctuation: [`.`, `,`, `:`, `;`, `—`, `-`, `«`, `»`, `'`, `"`, `¿`, `?`, `¡`, `!`, `(`, `)`, `[`, `]`, `{`, `}`, `*`],
          },
        ],
      };
      module.exports = {
        English,
        French,
        Spanish,
        english: English,
        french:  French,
        spanish: Spanish,
      };

      /***/
    },

    /* 31 */
    /***/
    function(module, exports, __webpack_require__) {

      'use strict';
      module.exports = [`!`, `"`, `#`, `$`, `%`, `&`, `'`, `(`, `)`, `*`, `+`, `,`, `-`, `.`, `/`, `:`, `;`, `<`, `=`, `>`, `?`, `@`, `[`, `\\`, `]`, `^`, `_`, '`', `{`, `|`, `}`, `~`, `¡`, `¢`, `£`, `¥`, `¦`, `§`, `©`, `«`, `®`, `°`, `»`, `¿`, `ƒ`, `֏`, `،`, `৳`, `฿`, `჻`, `៛`, `‒`, `–`, `—`, `―`, `‖`, `‘`, `’`, `′`, `″`, `‴`, `‚`, `‛`, `“`, `”`, `„`, `‟`, `†`, `‡`, `•`, `‥`, `…`, `‰`, `″`, `‹`, `›`, `₠`, `₡`, `₢`, `₣`, `₥`, `₦`, `₧`, `₨`, `₩`, `₪`, `₫`, `€`, `₭`, `₮`, `₯`, `₰`, `₱`, `₲`, `₳`, `₴`, `₵`, `₸`, `₹`, `₺`, `₽`, `₾`, `℗`, `℠`, `™`, `−`, `ℳ`, `♪`, `⟨`, `⟩`, `、`, `。`, `〈`, `〉`, `《`, `》`, `「`, `」`, `『`, `』`, `【`, `】`, `〜`, `〝`, `〞`, `〟`, `〽`, `・`, `﹁`, `﹂`, `﹃`, `﹄`, `﹏`, `！`, `＂`, `＇`, `（`, `）`, `，`, `：`, `；`, `？`, `［`, `］`, `｛`, `｝`, `～`, `｢`, `｣`];

      /***/
    },

    /* 32 */
    /***/
    function(module, exports, __webpack_require__) {

      'use strict';
      module.exports = {
        Access:          __webpack_require__(9),
        Address:         __webpack_require__(12),
        Allomorph:       __webpack_require__(16),
        Grapheme:        __webpack_require__(17),
        Language:        __webpack_require__(18),
        Lexeme:          __webpack_require__(47),
        LexemeReference: __webpack_require__(6),
        LexicalRelation: __webpack_require__(13),
        Location:        __webpack_require__(7),
        Media:           __webpack_require__(56),
        Morpheme:        __webpack_require__(22),
        MultiLangString: __webpack_require__(1),
        Note:            __webpack_require__(2),
        Orthography:     __webpack_require__(19),
        Person:          __webpack_require__(24),
        Phone:           __webpack_require__(59),
        Phoneme:         __webpack_require__(20),
        Sentence:        __webpack_require__(10),
        Place:           __webpack_require__(7),
        Reference:       __webpack_require__(8),
        Sense:           __webpack_require__(23),
        Sentence:        __webpack_require__(10),
        String:          __webpack_require__(1),
        Tags:            __webpack_require__(3),
        Transcription:   __webpack_require__(4),
        Variant:         __webpack_require__(14),
        Word:            __webpack_require__(21),
      };
      Object.entries(module.exports).forEach(([ModelName, Model]) => {
        const lowercasename = ModelName.toLowerCase();
        const camelCaseName = ModelName.charAt(0).toLowerCase() + ModelName.slice(1);
        const CAPSNAME = ModelName.toUpperCase();
        module.exports[lowercasename] = Model;
        module.exports[camelCaseName] = Model;
        module.exports[CAPSNAME] = Model;
      });

      /***/
    },

    /* 33 */
    /***/
    function(module, exports, __webpack_require__) {

      'use strict';
      const MultiLangString = __webpack_require__(1);
      const {
        addAbbreviation,
        addType,
        aliasLanguage,
        defineProp,
        simplify,
      } = __webpack_require__(0);
      const AILLAValues = [`depositor control`, `password`, `public access`, `time limit`];
      const ELARValues = [`Community Member`, `Researcher`, `Subscriber`, `User`];
      const checkVal = val => {
        if (!(typeof val === `string` || typeof val === `boolean`)) {
          throw new TypeError(`Properties on the Access object must be either a Boolean or String.`);
        }
      };
      class Access {
        constructor(data = {}) {
          if (!(data instanceof Object)) {
            throw new TypeError(`The data passed to the Access constructor must be an Object.`);
          }
          Object.entries(data).forEach(([key, val]) => {
            if (key !== `notes`) checkVal(val);
          });
          Object.assign(this, data);
          addAbbreviation(this, `defaultAnalysisLanguage`, data.defaultAnalysisLanguage || `eng`);
          addType(this, `Access`);
          defineProp(this, `notes`, MultiLangString, data.notes || {});
          aliasLanguage(this, `notes`, `$notes`);
          let AILLA;
          let ELAR;
          Object.defineProperties(this, {
            AILLA: {
              configurable: false,
              enumerable:   true,
              get() {
                return AILLA;
              },
              set(val) {
                if (!AILLAValues.includes(val)) {
                  throw new RangeError(`The AILLA access level must be one of "depositor control", "password", "public access", or "time limit".`);
                }
                AILLA = val;
              },
            },
            ELAR: {
              configurable: false,
              enumerable:   true,
              get() {
                return ELAR;
              },
              set(val) {
                if (!ELARValues.includes(val)) {
                  throw new RangeError(`The ELAR access level must be one of "Community Member", "Researcher", "Subscriber", or "User".`);
                }
                ELAR = val;
              },
            },
          });
          const handler = {
            set(target, prop, val, proxy) {
              if (prop !== `notes`) checkVal(val);
              return Reflect.set(target, prop, val, proxy);
            },
          };
          return new Proxy(this, handler);
        }

        toJSON() {
          return simplify(this);
        }
      }
      module.exports = Access;

      /***/
    },

    /* 34 */
    /***/
    function(module, exports, __webpack_require__) {

      'use strict';
      const { isAbbr } = __webpack_require__(0);
      const validateKey = key => {
        if (!isAbbr(key)) {
          throw new Error(`Each key must be an Abbreviation of a language.`);
        }
      };
      const validateString = string => {
        if (typeof string !== `string`) {
          throw new TypeError(`Each value must be a String of text in a particular language.`);
        }
      };
      class MultiLangString extends Map {
        constructor(data = {}) {
          if (data instanceof Map) return data;
          if (typeof data !== `object`) {
            throw new TypeError(`The data passed to the MultiLangString constructor must be an object.`);
          }
          Object.keys(data).forEach(validateKey);
          Object.values(data).forEach(validateString);
          super(Object.entries(data));
          const handler = {
            get(target, prop) {
              if (target[prop] instanceof Function) return target[prop].bind(target);
              return target.has(prop) ? target.get(prop) : target[prop];
            },
            set(target, prop, val) {
              validateKey(prop);
              validateString(val);
              return target.set(prop, val);
            },
          };
          return new Proxy(this, handler);
        }

        toJSON() {
          const data = {};
          Array.from(this.entries()).forEach(([key, val]) => {
            data[key] = val;
          });
          return data;
        }
      }
      module.exports = MultiLangString;

      /***/
    },

    /* 35 */
    /***/
    function(module, exports, __webpack_require__) {

      'use strict';
      const defaultPunctuation = __webpack_require__(11).punctuation;

      function addAbbreviation(obj, propName = `abbreviation`, initialValue) {
        if (!(obj instanceof Object)) throw new TypeError(`addAbbreviation must be passed an Object.`);
        if (typeof propName !== `string`) throw new TypeError(`The property name to set must be a String.`);
        let abbreviation;
        Object.defineProperty(obj, propName, {
          configurable: true,
          enumerable:   true,
          get() {
            return abbreviation;
          },
          set(val) {
            if (!val) return;
            checkProp(val, `abbr`, propName);
            abbreviation = val;
            return abbreviation;
          },
        });
        if (initialValue) obj[propName] = initialValue;
        return obj;
      }

      function addType(object, type) {
        Object.defineProperty(object, `type`, {
          configurable: false,
          enumerable:   true,
          get() {
            return type;
          },
          set() {
            return false;
          },
        });
        return object;
      }

      function addURL(object, propName = `url`, initialValue) {
        if (!(object instanceof Object)) throw new TypeError(`The object argument must be an Object.`);
        if (typeof propName !== `string`) throw new TypeError(`The propName argument must be a String.`);
        let value;
        Object.defineProperty(object, propName, {
          configurable: true,
          enumerable:   true,
          get() {
            return value;
          },
          set(val) {
            if (!val) return;
            checkProp(val, `url`, propName);
            value = val;
            return value;
          },
        });
        if (initialValue) object[propName] = initialValue;
        return object;
      }

      function aliasLanguage(obj, stringProp, defaultProp) {
        Object.defineProperty(obj, defaultProp, {
          configurable: true,
          enumerable:   false,
          get() {
            return obj[stringProp][obj.defaultAnalysisLanguage];
          },
          set(val) {
            obj[stringProp][obj.defaultAnalysisLanguage] = val;
          },
        });
        return obj;
      }

      function aliasTranscription(obj, txnProp, defaultProp) {
        Object.defineProperty(obj, defaultProp, {
          configurable: true,
          enumerable:   false,
          get() {
            return obj[txnProp][obj.defaultOrthography];
          },
          set(val) {
            obj[txnProp][obj.defaultOrthography] = val;
          },
        });
        return obj;
      }

      function checkProp(...args) {
        if (args.length !== 3) throw new Error(`Missing arguments to chceckProp function.`);
        const [item, type, prop] = args;
        switch (type) {
          case `abbr`:
          {
            if (!isAbbr(item)) throw new TypeError(`The ${prop} property must be a valid abbreviation.`);
            break;
          }
          case `array`:
          {
            if (!Array.isArray(item)) throw new TypeError(`The ${prop} property must be an array.`);
            break;
          }
          case `date`:
          {
            if (isNaN(Date.parse(item))) throw new TypeError(`The ${prop} property must be a valid date.`);
            break;
          }
          case `integer`:
          {
            if (!Number.isInteger(item)) throw new TypeError(`The ${prop} property must be an integer.`);
            break;
          }
          case `iterable`:
          {
            if (!isIterable(item)) throw new TypeError(`The ${prop} property must be an iterable object.`);
            break;
          }
          case `number`:
          {
            if (typeof item !== `number`) throw new TypeError(`The ${prop} property must be a number.`);
            break;
          }
          case `object`:
          {
            if (typeof item !== `object`) throw new TypeError(`The ${prop} property must be an object.`);
            break;
          }
          case `string`:
          {
            if (typeof item !== `string`) throw new TypeError(`The ${prop} property must be a string.`);
            break;
          }
          case `url`:
          {
            if (!isURL(item)) throw new TypeError(`The ${prop} property must be a valid URI.`);
            break;
          }
          default:
        }
        return item;
      }

      function createElement(type, props = {}) {
        return Object.assign(document.createElement(type), props);
      }

      function debounce(func, wait = 250, immediate = false) {
        let timeout;
        return function(...args) {
          const later = () => {
            timeout = null;
            if (!immediate) func.apply(this, args);
          };
          const callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
          if (callNow) func.apply(this, args);
        };
      }

      function defineArray(object, propName, model, initialValue = []) {
        if (!Array.isArray(initialValue)) {
          throw new TypeError(`The ${propName} property must be an array.`);
        }
        const ItemModel = model;
        const isString = ItemModel === String;
        const handler = {
          set(target, prop, val, proxy) {
            let newVal = val;
            if (Number.isInteger(Number(prop))) {
              if (isString && typeof val !== 'string') {
                throw new TypeError(`Each of the items in ${propName} must be a String.`);
              } else if (!isString) {
                newVal = new ItemModel(val);
              }
            }
            return Reflect.set(target, prop, newVal, proxy);
          },
        };
        const p = new Proxy([], handler);
        p.push(...initialValue);
        Object.defineProperty(object, propName, {
          configurable: true,
          enumerable:   true,
          get() {
            return p;
          },
          set(arr = []) {
            if (!Array.isArray(arr)) {
              throw new TypeError(`The ${propName} property must be an Array.`);
            }
            p.splice(0);
            p.push(...arr);
          },
        });
      }

      function defineEnumProp(object, propName, values, initialValue) {
        if (!(object instanceof Object)) {
          throw new TypeError(`The object argument must be an Object.`);
        }
        if (!Array.isArray(values)) {
          throw new TypeError(`The values argument must be an array of allowed values.`);
        }
        const o = object;
        let value;
        Object.defineProperty(o, propName, {
          configurable: true,
          enumerable:   true,
          get() {
            return value;
          },
          set(val) {
            if (!values.includes(val)) {
              throw new Error(`The value provided is not a valid value for the ${propName} property.`);
            }
            value = val;
            return value;
          },
        });
        if (typeof initialValue !== 'undefined') o[propName] = initialValue;
        return o;
      }

      function defineProp(object, propName, model, initialValue) {
        // validate that object is an object here, throw error if not
        const o = object;
        const PropModel = model;
        const isDate = PropModel === Date;
        const isNum = PropModel === Number;
        const isString = PropModel === String;
        let value;
        Object.defineProperty(o, propName, {
          configurable: true,
          enumerable:   true,
          get() {
            return value;
          },
          set(val) {
            if (isString) {
              if (typeof val !== 'string') {
                throw new TypeError(`The ${propName} property must be a String.`);
              }
              value = val;
            } else if (isNum) {
              if (typeof val !== 'number') {
                throw new TypeError(`The ${propName} property must be a Number.`);
              }
              value = val;
            } else if (isDate) {
              if (isNaN(Date.parse(val))) {
                throw new TypeError(`The ${propName} property must be a valid Date string or object.`);
              }
              value = new Date(val);
            } else if (typeof val !== 'undefined') {
              value = new PropModel(val);
            }
          },
        });
        if (typeof initialValue !== 'undefined') o[propName] = initialValue;
        return o;
      }

      function defineSet(object, propName, model, initialValue) {
        if (!(object instanceof Object)) throw new TypeError(`The object argument must be an Object.`);
        if (typeof propName !== `string`) throw new TypeError(`The propName argument must be a String.`);
        const set = new Set;
        const ItemModel = model;
        Object.defineProperties(set, {
          add: {
            configurable: true,
            enumerable:   false,
            writable:     false,
            value:        new Proxy(set.add, {
              apply(target, context, [val]) {
                if (ItemModel === String) {
                  if (typeof val !== `string`) throw new TypeError(`Items in the ${propName} Set must be Strings.`);
                } else if (ItemModel === Number) {
                  if (typeof val !== `number`) throw new TypeError(`Items in the ${propName} Set must be Numbers.`);
                } else if (!(object instanceof ItemModel)) {
                  throw new TypeError(`Not a valid item type for the ${propName} property.`);
                }
                return Reflect.apply(target, context, [val]);
              },
            }),
          },
          toJSON: {
            configurable: true,
            enumerable:   false,
            value() {
              return Array.from(this);
            },
            writable: false,
          },
        });
        Object.defineProperty(object, propName, {
          configurable: false,
          enumerable:   true,
          get() {
            return set;
          },
          set(val) {
            if (!val) return false;
            if (val instanceof Set || Array.isArray(val)) {
              set.clear();
              val.forEach(item => set.add(item));
            } else {
              throw new TypeError(`The ${propName} property must be an Array or Set.`);
            }
            return true;
          },
        });
        if (initialValue) object[propName] = initialValue;
        return object;
      }

      function getUniqueChars(string) {
        if (typeof string !== `string`) {
          throw new TypeError(`The argument passed to getUniqueChars must be a string.`);
        }
        return Array.from(new Set(string));
      }

      function getUniqueReferences(references = []) {
        if (!Array.isArray(references)) {
          throw new TypeError(`The references must be an Array.`);
        }
        const uniques = [];
        const isEqual = (obj1, obj2) => {
          const stringsEqual = obj1.lexicon === obj2.lexicon && obj1.lexeme === obj2.lexeme && obj1.relation === obj2.relation && obj1.sense === obj2.sense;
          if (stringsEqual) {
            if (obj1.variantType && obj2.variantType) {
              return Object.entries(obj1.variantType).every(([key, val]) => val === obj2.variantType[key]) && Object.entries(obj2.variantType).every(([key, val]) => val === obj1.variantType[key]);
            } else if (obj1.variantType || obj2.variantType) {
              return false;
            }
            return true;
          }
          return false;
        };
        references.forEach(ref => {
          if (!uniques.some(obj => isEqual(obj, ref))) uniques.push(ref);
        });
        return uniques;
      }

      function isAbbr(string) {
        if (typeof string === `string`) return /^[(a-z)|(A-Z)|(0-9)]+$/.test(string);
        return false;
      }

      function isDateString(string) {
        return !isNaN(Date.parse(string));
      }

      function isIterable(obj) {
        if (!obj) return false;
        return typeof obj[Symbol.iterator] === `function`;
      }

      function isURL(string) {
        return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(string);
      }

      function sanitize(string, substitutions) {
        return transliterate(string, substitutions);
      }
      class Sanitizer {
        constructor(substitutions) {
          this.substitutions = substitutions;
          return string => sanitize(string, substitutions);
        }
      }

      function simplify(model, required = []) {
        if (!(model instanceof Object)) {
          throw new TypeError(`The model argument must be an Object.`);
        }
        if (!Array.isArray(required) || required.some(val => typeof val !== 'string')) {
          throw new TypeError(`The required argument must be an Array of Strings.`);
        }
        const o = Object.assign({}, model);
        for (const prop in model) {
          if (!required.includes(prop)) {
            if (Array.isArray(o[prop]) && !o[prop].length || (o[prop] instanceof Set || o[prop] instanceof Map) && !o[prop].size || o[prop] && o[prop].constructor === Object && !Object.keys(o[prop]).length || typeof o[prop] === `string` && !o[prop].length) {
              delete o[prop];
            }
            if (o[prop] instanceof Map || o[prop] instanceof Set) {
              o[prop].forEach((val, key) => {
                if (typeof val === 'string' && !val.length) o[prop].delete(key);
              });
            }
          }
        }
        return o;
      }

      function tokenize(string, delimiters, punctuation) {
        const delims = delimiters || [`\\s`];
        const punct = punctuation || defaultPunctuation;
        if (typeof string !== `string`) {
          throw new TypeError(`The string argument must be a string.`);
        }
        if (!(Array.isArray(delims) && Array.isArray(punct))) {
          throw new TypeError(`The delimiters and punctuation arguments must be arrays.`);
        }
        const substitutions = {};
        punct.forEach(item => {
          substitutions[item] = ``;
        });
        const depunctuated = sanitize(string, substitutions);
        const pattern = `[${delims.join(``)}]+`;
        const regexp = new RegExp(pattern, `gu`);
        return depunctuated.split(regexp);
      }
      class Tokenizer {
        constructor(delimiters, punctuation) {
          this.delimiters = delimiters;
          this.punctuation = punctuation;
          return string => tokenize(string, this.delimiters, this.punctuation);
        }
      }

      function transliterate(string = ``, substitutions = {}) {
        if (typeof string !== `string`) {
          throw new TypeError(`The first argument passed to transliterate must be a string.`);
        }
        if (!(typeof substitutions === `object` && Object.values(substitutions).every(val => typeof val === `string`))) {
          throw new TypeError(`The second argument passed to substitutions must be an object whose attributes and values are strings.`);
        }
        const temps = new Map;
        const subs = new Map;
        let str = string;
        const getRandomCodePoint = () => String.fromCodePoint(Math.floor(Math.random() * 95) + 9632);
        const inputs = Object.keys(substitutions);
        Object.entries(substitutions).sort(([a], [b]) => b.length - a.length).forEach(([input, replacement]) => {
          const escapedInput = input.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);
          subs.set(escapedInput, replacement);
          if (inputs.includes(replacement)) {
            let temp = getRandomCodePoint();
            while (temps.has(temp)) temp = getRandomCodePoint();
            temps.set(temp, replacement);
            subs.set(escapedInput, temp);
          }
          const regexp = new RegExp(escapedInput, `gu`);
          str = str.replace(regexp, subs.get(escapedInput));
        });
        temps.forEach((replacement, temp) => {
          const regexp = new RegExp(temp, `gu`);
          str = str.replace(regexp, replacement);
        });
        return str;
      }
      class Transliterator {
        constructor(substitutions) {
          this.substitutions = substitutions;
          return string => transliterate(string, this.substitutions);
        }
      }
      module.exports = {
        addAbbreviation,
        addType,
        addURL,
        aliasLanguage,
        aliasTranscription,
        checkProp,
        createElement,
        debounce,
        defineArray,
        defineEnumProp,
        defineProp,
        defineSet,
        getUniqueChars,
        getUniqueReferences,
        isAbbr,
        isDateString,
        isIterable,
        isURL,
        sanitize,
        Sanitizer,
        simplify,
        tokenize,
        Tokenizer,
        transliterate,
        Transliterator,
      };

      /***/
    },

    /* 36 */
    /***/
    function(module, exports, __webpack_require__) {

      'use strict';
      const {
        addType,
        defineProp,
        simplify,
      } = __webpack_require__(0);
      class Address {
        constructor(data = {}) {
          if (!(data instanceof Object)) {
            throw new TypeError(`The data passed to the Address constructor must be an Object.`);
          }
          Object.entries(data).forEach(([key, val]) => {
            if (val && typeof val !== 'string') throw new TypeError(`The "${key}" property must be a String.`);
          });
          Object.assign(this, data);
          addType(this, `Address`);
          defineProp(this, 'apartmentNumber', String, data.apartmentNumber);
          defineProp(this, 'country', String, data.country);
          defineProp(this, 'locality', String, data.locality);
          defineProp(this, 'postalBoxNumber', String, data.postalBoxNumber);
          defineProp(this, 'postalCode', String, data.postal);
          defineProp(this, 'region', String, data.region);
          defineProp(this, 'streetAddress', String, data.streetAddress);
          const handler = {
            set(target, prop, val, proxy) {
              if (typeof val !== 'string') {
                throw new TypeError(`The "${prop}" property must be a String.`);
              }
              return Reflect.set(target, prop, val, proxy);
            },
          };
          return new Proxy(this, handler);
        }

        toJSON() {
          return simplify(this);
        }
      }
      module.exports = Address;

      /***/
    },

    /* 37 */
    /***/
    function(module, exports, __webpack_require__) {

      'use strict';
      const Transcription = __webpack_require__(4);
      const {
        addAbbreviation,
        addType,
        aliasTranscription,
        defineProp,
        simplify,
      } = __webpack_require__(0);
      const defaults = {
        environments:  [],
        transcription: {},
      };
      class Allomorph {
        constructor(data = defaults) {
          if (data instanceof Allomorph) return data;
          if (typeof data !== `object`) {
            throw new TypeError(`The data passed to the Allomorph constructor must be an Object.`);
          }
          if (data.environments && !(Array.isArray(data.environments) || data.environments instanceof Set)) {
            throw new TypeError(`The "environements" property must be an Array or Set.`);
          }
          Object.assign(this, data);
          addAbbreviation(this, `defaultOrthography`, data.defaultOrthography || `ipa`);
          addType(this, `Allomorph`);
          defineProp(this, `transcription`, Transcription, data.transcription || {});
          aliasTranscription(this, `transcription`, `txn`);
          const environments = new Set;
          Object.defineProperty(environments, `add`, {
            configurable: false,
            enumerable:   false,
            value:        new Proxy(environments.add, {
              apply(target, context, [val]) {
                if (typeof val !== `string`) {
                  throw new TypeError(`The value to add to "environments" must be a String.`);
                }
                return Reflect.apply(target, context, [val]);
              },
            }),
            writable: false,
          });
          Object.defineProperty(this, `environments`, {
            configurable: false,
            enumerable:   true,
            value:        environments,
            writable:     false,
          });
          Array.from(data.environments || []).forEach(env => this.environments.add(env));
        }

        toJSON() {
          const data = simplify(this, [`environments`, `transcription`]);
          data.environments = Array.from(this.environments);
          return data;
        }
      }
      module.exports = Allomorph;

      /***/
    },

    /* 38 */
    /***/
    function(module, exports, __webpack_require__) {

      'use strict';
      const { isAbbr } = __webpack_require__(0);
      const validateKey = key => {
        if (!isAbbr(key)) {
          throw new Error(`Each key must be an abbreviation for an orthography.`);
        }
      };
      const validateString = string => {
        if (typeof string !== 'string') {
          throw new TypeError(`Each value must be a transcription of the data in a particular orthography.`);
        }
      };
      class Transcription extends Map {
        constructor(data = {}) {
          if (data instanceof Transcription) return data;
          if (typeof data !== `object`) {
            throw new TypeError(`The data passed to the Transcription constructor must be an Object.`);
          }
          Object.keys(data).forEach(validateKey);
          Object.values(data).forEach(validateString);
          super(Object.entries(data));
          const handler = {
            get(target, prop) {
              if (target[prop] instanceof Function) return target[prop].bind(target);
              return target.get(prop) || target[prop];
            },
            set(target, prop, val) {
              validateKey(prop);
              validateString(val);
              return target.set(prop, val);
            },
          };
          return new Proxy(this, handler);
        }

        toJSON() {
          const data = {};
          Array.from(this.entries()).forEach(([key, val]) => {
            data[key] = val;
          });
          return data;
        }
      }
      module.exports = Transcription;

      /***/
    },

    /* 39 */
    /***/
    function(module, exports, __webpack_require__) {

      'use strict';
      const {
        addType,
        defineArray,
        defineProp,
        simplify,
      } = __webpack_require__(0);
      const props = [`allographs`, `form`, `name`, `pronunciations`];
      class Grapheme {
        constructor(data = {}) {
          if (!(data instanceof Object)) {
            throw new TypeError(`The data passed to the Grapheme constructor must be an Object.`);
          }
          addType(this, `Grapheme`);
          defineProp(this, `form`, String, data.form || ``);
          defineProp(this, `name`, String, data.name || ``);
          defineArray(this, `allographs`, String, data.allographs);
          defineArray(this, `pronunciations`, String, data.pronunciations);
          const handler = {
            set(target, prop, val, proxy) {
              if (!props.includes(prop)) return false;
              return Reflect.set(target, prop, val, proxy);
            },
          };
          return new Proxy(this, handler);
        }

        toJSON() {
          return simplify(this, [`form`]);
        }
      }
      module.exports = Grapheme;

      /***/
    },

    /* 40 */
    /***/
    function(module, exports, __webpack_require__) {

      'use strict';
      const Location = __webpack_require__(7);
      const { Model } = __webpack_require__(5);
      const MultiLangString = __webpack_require__(1);
      const Orthography = __webpack_require__(19);
      const Phoneme = __webpack_require__(20);
      const Transcription = __webpack_require__(4);
      const {
        addAbbreviation,
        addType,
        addURL,
        aliasLanguage,
        aliasTranscription,
        defineArray,
        defineProp,
        defineSet,
        simplify,
      } = __webpack_require__(0);
      const checkGlottolog = val => {
        if (!/[a-z]{4}[0-9]{4}/.test(val)) {
          throw new Error(`The Glottolog code must be formatted as a String of 4 letters followed by 4 numbers.`);
        }
      };
      const checkISO = val => {
        if (!/^[a-z]{3}$/.test(val)) {
          throw new Error(`The ISO code must be formatted as a 3-letter String.`);
        }
      };
      class Language extends Model {
        constructor(data = {}) {
          if (data instanceof Language) return data;
          if (!(data instanceof Object)) {
            throw new TypeError(`The data passed to the Language constructor must be an Object.`);
          }
          if (`glottolog` in data) checkGlottolog(data.glottolog);
          if (`iso` in data) checkISO(data.iso);
          super();
          Object.assign(this, data);
          addAbbreviation(this, `abbreviation`, data.abbreviation);
          addAbbreviation(this, `defaultAnalysisLanguage`, data.defaultAnalysisLanguage || `eng`);
          addAbbreviation(this, `defaultOrthography`, data.defaultOrthography || `ipa`);
          addType(this, `Language`);
          addURL(this, `url`, data.url);
          defineProp(this, `autonym`, Transcription, data.autonym || {});
          defineProp(this, `dateCreated`, Date, data.dateCreated || new Date);
          defineProp(this, `dateModified`, Date, data.dateModified || new Date);
          defineProp(this, `name`, MultiLangString, data.name || {});
          defineArray(this, `locations`, Location, data.locations);
          defineArray(this, `orthographies`, Orthography, data.orthographies);
          defineArray(this, `phonemes`, Phoneme, data.phonemes);
          defineSet(this, `additionalNames`, String, data.additionalNames);
          aliasLanguage(this, `name`, `$name`);
          aliasTranscription(this, `autonym`, `$autonym`);
          const handler = {
            set(target, prop, val, proxy) {
              switch (prop) {
                case `glottolog`:
                  checkGlottolog(val);
                  break;
                case `iso`:
                  checkISO(val);
                  break;
                default:
                  break;
              }
              target.dateModified = new Date;
              return Reflect.set(target, prop, val, proxy);
            },
          };
          return new Proxy(this, handler);
        }

        toJSON() {
          const data = simplify(this, [`name`]);
          return data;
        }
      }
      module.exports = Language;

      /***/
    },

    /* 41 */
    /***/
    function(module, exports, __webpack_require__) {

      'use strict';
      const Access = __webpack_require__(9);
      const Address = __webpack_require__(12);
      const MultiLangString = __webpack_require__(1);
      const Note = __webpack_require__(2);
      const Reference = __webpack_require__(8);
      const Tags = __webpack_require__(3);
      const {
        addAbbreviation,
        addType,
        addURL,
        aliasLanguage,
        defineArray,
        defineProp,
        simplify,
      } = __webpack_require__(0);
      class Location {
        constructor(data = {}) {
          if (!(data instanceof Object)) {
            throw new TypeError(`The data passed to the Location constructor must be an Object.`);
          }
          Object.assign(this, data);
          addAbbreviation(this, `abbreviation`, data.abbreviation);
          addAbbreviation(this, `defaultAnalysisLanguage`, data.defaultAnalysisLanguage || `eng`);
          addType(this, `Location`);
          addURL(this, `url`, data.url);
          defineProp(this, `access`, Access, data.access || {});
          defineProp(this, `address`, Address, data.address);
          defineProp(this, `dateCreated`, Date, data.dateCreated || new Date);
          defineProp(this, `dateModified`, Date, data.dateModified || new Date);
          defineProp(this, `geoJSON`, Object, data.geoJSON);
          defineProp(this, `name`, MultiLangString, data.name || {});
          defineProp(this, `tags`, Tags, data.tags || {});
          defineArray(this, `notes`, Note, data.notes);
          defineArray(this, `references`, Reference, data.references);
          aliasLanguage(this, `name`, `$name`);
          const handler = {
            set(target, prop, val, proxy) {
              target.dateModified = new Date;
              return Reflect.set(target, prop, val, proxy);
            },
          };
          return new Proxy(this, handler);
        }

        toJSON() {
          return simplify(this, [`name`]);
        }
      }
      module.exports = Location;

      /***/
    },

    /* 42 */
    /***/
    function(module, exports, __webpack_require__) {

      'use strict';
      const {
        addAbbreviation,
        addType,
        defineProp,
        simplify,
      } = __webpack_require__(0);
      const actions = ['defineProperty', 'deleteProperty', 'set'];
      const props = ['dateCreated', 'dateModified', 'language', 'noteType', 'person', 'text', 'type'];
      const types = [`note-to-self`, `general`, `anthropology`, `discourse`, `encyclopedic`, `grammar`, `phonology`, `semantics`, `sociocultural`];
      class Note {
        constructor(data = ``) {
          if (data instanceof Note) return data;
          if (data && !(typeof data === `object` || typeof data === `string`)) {
            throw new TypeError(`The data passed to the Note constructor must be either an Object or a String.`);
          }
          if (typeof data === `object`) {
            if (`noteType` in data && !types.includes(data.noteType)) {
              throw new RangeError(`Invalid value for the "noteType" property.`);
            }
          }
          addAbbreviation(this, `language`);
          addAbbreviation(this, `person`);
          addType(this, `Note`);
          defineProp(this, `text`, String);
          defineProp(this, `dateCreated`, Date, new Date);
          defineProp(this, `dateModified`, Date, new Date);
          if (typeof data === `string`) this.text = data;
          if (typeof data === `object`) {
            this.text = data.text || ``;
            if (`dateCreated` in data) this.dateCreated = data.dateCreated;
            if (`dateModified` in data) this.dateModified = data.dateModified;
            if (`language` in data) this.language = data.language;
            if (`person` in data) this.person = data.person;
            if (`noteType` in data) this.noteType = data.noteType;
          }
          const handler = {};
          actions.forEach(action => {
            handler[action] = (...args) => {
              const [target, prop] = args;
              if (props.includes(prop)) {
                target.dateModified = new Date;
                return Reflect[action](...args);
              }
              return false;
            };
          });
          return new Proxy(this, handler);
        }

        toJSON() {
          return simplify(this, [`text`]);
        }
      }
      module.exports = Note;

      /***/
    },

    /* 43 */
    /***/
    function(module, exports, __webpack_require__) {

      'use strict';
      const {
        addType,
        simplify,
      } = __webpack_require__(0);
      class Reference {
        constructor(data = {
          title: ``,
        }) {
          Object.assign(this, data);
          addType(this, `Reference`);
        }

        toJSON() {
          return simplify(this, [`title`]);
        }
      }
      module.exports = Reference;

      /***/
    },

    /* 44 */
    /***/
    function(module, exports, __webpack_require__) {

      'use strict';
      const {
        addType,
        isIterable,
      } = __webpack_require__(0);
      const checkStrings = arr => {
        if (!arr.every(val => typeof val === `string`)) {
          throw new TypeError(`Tags must be strings.`);
        }
      };
      const checkTagValues = vals => {
        if (vals.some(val => !(typeof val === `string` || typeof val === `boolean` || typeof val === `number`))) {
          throw new TypeError(`The value of a tag must be a string, boolean, or number.`);
        }
      };
      class Tags extends Map {
        constructor(data = {}) {
          if (typeof data !== `object`) {
            throw new TypeError(`The data passed to the Tags constructor must be an object.`);
          }
          if (Array.isArray(data)) {
            checkStrings(data.map(item => item[0]));
            checkTagValues(data.map(item => item[1]));
          } else if (isIterable(data)) {
            checkStrings(Array.from(data.keys()));
            checkTagValues(Array.from(data.values()));
          } else {
            checkTagValues(Object.values(data));
          }
          if (isIterable(data)) super(data);
          else super(Object.entries(data));
          addType(this, `Tags`);
          Object.defineProperty(this, `set`, {
            configurable: true,
            enumerable:   false,
            value:        new Proxy(this.set, {
              apply(target, context, args) {
                if (typeof args[0] !== `string`) throw new TypeError(`Tags must be strings.`);
                return Reflect.apply(target, context, args);
              },
            }),
            writable: false,
          });
        }

        toJSON() {
          const data = {};
          Array.from(this.entries()).forEach(([key, val]) => {
            data[key] = val;
          });
          return data;
        }
      }
      module.exports = Tags;

      /***/
    },

    /* 45 */
    /***/
    function(module, exports, __webpack_require__) {

      'use strict';
      const Grapheme = __webpack_require__(17);
      const MultiLangString = __webpack_require__(1);
      const Note = __webpack_require__(2);
      const Tags = __webpack_require__(3);
      const {
        addAbbreviation,
        addType,
        aliasLanguage,
        defineArray,
        defineProp,
        simplify,
      } = __webpack_require__(0);
      class Orthography {
        constructor(data = {}) {
          if (data instanceof Orthography) return data;
          if (!(data instanceof Object)) {
            throw new TypeError(`The data passed to the Orthography constructor must be an Object.`);
          }
          Object.assign(this, data);
          addAbbreviation(this, `abbreviation`, data.abbreviation);
          addAbbreviation(this, `defaultAnalysisLanguage`, data.defaultAnalysisLanguage || `eng`);
          addType(this, `Orthography`);
          defineProp(this, `name`, MultiLangString, data.name || {});
          defineProp(this, `tags`, Tags, data.tags || {});
          defineArray(this, `graphemes`, Grapheme, data.graphemes);
          defineArray(this, `notes`, Note, data.notes);
          defineArray(this, `punctuation`, String, data.punctuation);
          aliasLanguage(this, `name`, `$name`);
        }

        toJSON() {
          return simplify(this, [`abbreviation`, `graphemes`, `name`]);
        }
      }
      module.exports = Orthography;

      /***/
    },

    /* 46 */
    /***/
    function(module, exports, __webpack_require__) {

      'use strict';
      const Note = __webpack_require__(2);
      const Reference = __webpack_require__(8);
      const Tags = __webpack_require__(3);
      const {
        addType,
        defineArray,
        defineEnumProp,
        defineProp,
        simplify,
      } = __webpack_require__(0);
      const {
        features: {
          airstream,
          backness,
          diacritics,
          height,
          length,
          manner,
          place,
          rounding,
          voicing,
        },
      } = __webpack_require__(11);
      class Phoneme {
        constructor(data = {}) {
          if (!(data instanceof Object)) {
            throw new TypeError(`The data passed to the Phoneme constructor must be an Object.`);
          }
          Object.assign(this, data);
          addType(this, `Phoneme`);
          defineProp(this, `ipa`, String, data.ipa || ``);
          defineProp(this, `tags`, Tags, data.tags || {});
          defineProp(this, `target1`, Phoneme, data.target1);
          defineProp(this, `target2`, Phoneme, data.target2);
          defineProp(this, `target3`, Phoneme, data.target3);
          defineProp(this, `tone`, String, data.tone);
          defineEnumProp(this, `airstream`, airstream, data.airstream);
          defineEnumProp(this, `backness`, backness, data.backness);
          defineEnumProp(this, `height`, height, data.height);
          defineEnumProp(this, `length`, length, data.length);
          defineEnumProp(this, `manner`, manner, data.manner);
          defineEnumProp(this, `place`, place, data.place);
          defineEnumProp(this, `rounding`, rounding, data.rounding);
          defineEnumProp(this, `voicing`, voicing, data.voicing);
          defineArray(this, `allophones`, Phoneme, data.allophones);
          defineArray(this, `notes`, Note, data.notes);
          defineArray(this, `references`, Reference, data.references);
          const features = new Set(data.features);
          Object.defineProperty(this, `features`, {
            configurable: false,
            enumerable:   true,
            value:        features,
            writable:     false,
          });
          Object.defineProperty(this.features, `add`, {
            configurable: false,
            enumerable:   false,
            value:        new Proxy(this.features.add, {
              apply(target, context, [feature]) {
                if (!diacritics.includes(feature)) {
                  throw new RangeError(`The feature value is invalid.`);
                }
                Reflect.apply(target, context, [feature]);
              },
            }),
            writable: false,
          });
        }

        toJSON() {
          const data = simplify(this, [`ipa`]);
          if (this.features.size) data.features = Array.from(this.features);
          return data;
        }
      }
      module.exports = Phoneme;

      /***/
    },

    /* 47 */
    /***/
    function(module, exports, __webpack_require__) {

      'use strict';
      const Lexeme = __webpack_require__(48);
      module.exports = Lexeme;

      /***/
    },

    /* 48 */
    /***/
    function(module, exports, __webpack_require__) {

      'use strict';
      const Allomorph = __webpack_require__(16);
      const LexemeReference = __webpack_require__(6);
      const LexicalRelation = __webpack_require__(13);
      const { Model } = __webpack_require__(5);
      const MultiLangString = __webpack_require__(1);
      const Note = __webpack_require__(2);
      const Sentence = __webpack_require__(10);
      const Reference = __webpack_require__(8);
      const Sense = __webpack_require__(23);
      const Tags = __webpack_require__(3);
      const Transcription = __webpack_require__(4);
      const Variant = __webpack_require__(14);
      const {
        addAbbreviation,
        addType,
        addURL,
        aliasLanguage,
        aliasTranscription,
        defineArray,
        defineProp,
        getUniqueReferences,
        simplify,
      } = __webpack_require__(0);
      class Features extends Tags {
        constructor(data) {
          super(data);
          if (Array.from(this.values()).some(val => typeof val !== `string`)) {
            throw new TypeError(`Feature values must be Strings`);
          }
          Object.defineProperty(this, `set`, {
            configurable: false,
            enumerable:   false,
            value:        new Proxy(this.set, {
              apply(target, context, args) {
                if (!args.every(arg => typeof arg === `string`)) {
                  throw new TypeError(`Features and their values must be strings.`);
                }
                return Reflect.apply(target, context, args);
              },
            }),
            writable: false,
          });
        }
      }
      class Lexeme extends Model {
        constructor(data = {}) {
          if (data instanceof Lexeme) return data;
          if (typeof data !== `object`) {
            throw new TypeError(`The data passed to the Lexeme constructor must be an object.`);
          }
          super();
          Object.assign(this, data);
          addAbbreviation(this, `defaultAnalysisLanguage`, data.defaultAnalysisLanguage || `eng`);
          addAbbreviation(this, `defaultOrthography`, data.defaultOrthography || `ipa`);
          addAbbreviation(this, `key`, data.key);
          addType(this, `Lexeme`);
          addURL(this, `url`, data.url);
          defineProp(this, `citationForm`, Transcription, data.citationForm);
          defineProp(this, `dateCreated`, Date, data.dateCreated || new Date);
          defineProp(this, `dateModified`, Date, data.dateModified || new Date);
          defineProp(this, `lemma`, Transcription, data.lemma || {});
          defineProp(this, `literalMeaning`, MultiLangString, data.literalMeaning);
          defineProp(this, `features`, Features, data.features || {});
          defineProp(this, `morphemeType`, MultiLangString, data.morphemeType || {});
          defineProp(this, `syllableStructure`, String, data.syllableStructure);
          defineProp(this, `tags`, Tags, data.tags || {});
          defineProp(this, `tone`, String, data.tone);
          defineProp(this, `variantOf`, LexemeReference, data.variantOf);
          defineProp(this, `variantType`, MultiLangString, data.variantType);
          defineArray(this, `allomorphs`, Allomorph, data.allomorphs);
          defineArray(this, `components`, LexemeReference, data.components);
          defineArray(this, `examples`, Sentence, data.examples);
          defineArray(this, `includedIn`, LexemeReference, getUniqueReferences(data.includedIn || []));
          defineArray(this, `lexicalRelations`, LexicalRelation, getUniqueReferences(data.lexicalRelations || []));
          defineArray(this, `notes`, Note, data.notes);
          defineArray(this, `references`, Reference, data.references);
          defineArray(this, `senses`, Sense, data.senses);
          defineArray(this, `sources`, String, data.sources);
          defineArray(this, `variants`, Variant, getUniqueReferences(data.variants || []));
          aliasLanguage(this, `literalMeaning`, `$literalMeaning`);
          aliasLanguage(this, `morphemeType`, `$morphemeType`);
          aliasLanguage(this, `variantType`, `$variantType`);
          aliasTranscription(this, `citationForm`, `$citationForm`);
          aliasTranscription(this, `lemma`, `$lemma`);
          const handler = {
            set(target, prop, val, proxy) {
              target.dateModified = new Date;
              return Reflect.set(target, prop, val, proxy);
            },
          };
          return new Proxy(this, handler);
        }

        toJSON() {
          return simplify(this, [`lemma`, `senses`]);
        }
      }
      module.exports = Lexeme;

      /***/
    },

    /* 49 */
    /***/
    function(module, exports, __webpack_require__) {

      'use strict';
      const MultiLangString = __webpack_require__(1);
      const {
        addAbbreviation,
        addType,
        addURL,
        aliasLanguage,
        checkProp,
        defineProp,
        simplify,
      } = __webpack_require__(0);
      const props = [`lexeme`, `lexemeURL`, `lexicon`, `lexiconURL`, `relation`, `sense`, `variantType`, `$variantType`];
      class LexemeReference {
        constructor(data = ``) {
          if (data && typeof data !== `object` && typeof data !== `string`) {
            throw new TypeError(`The data passed to the LexemeReference constructor must be an object or string.`);
          } else if (typeof data === `object`) {
            if (`sense` in data) checkProp(data.sense, `integer`, `sense`);
          }
          addAbbreviation(this, `defaultAnalysisLanguage`);
          addAbbreviation(this, `lexeme`);
          addAbbreviation(this, `lexicon`);
          addAbbreviation(this, `relation`);
          addType(this, `LexemeReference`);
          addURL(this, `lexemeURL`);
          addURL(this, `lexiconURL`);
          defineProp(this, `variantType`, MultiLangString);
          if (typeof data === `string`) {
            this.lexeme = data;
          } else if (typeof data === `object`) {
            this.lexeme = data.lexeme || ``;
            if (`defaultAnalysisLanguage` in data) this.defaultAnalysisLanguage = data.defaultAnalysisLanguage || `eng`;
            if (`lexemeURL` in data) this.lexemeURL = data.lexemeURL;
            if (`lexicon` in data) this.lexicon = data.lexicon;
            if (`lexiconURL` in data) this.lexiconURL = data.lexiconURL;
            if (`sense` in data) this.sense = data.sense;
            if (`relation` in data) this.relation = data.relation;
            if (`variantType` in data) this.variantType = data.variantType;
          }
          aliasLanguage(this, `variantType`, `$variantType`);
          const handler = {
            set(target, prop, val, proxy) {
              if (!props.includes(prop)) return;
              else if (prop === `sense`) checkProp(val, `integer`, `sense`);
              return Reflect.set(target, prop, val, proxy);
            },
          };
          return new Proxy(this, handler);
        }

        toJSON() {
          return simplify(this, [`lexeme`]);
        }
      }
      module.exports = LexemeReference;

      /***/
    },

    /* 50 */
    /***/
    function(module, exports, __webpack_require__) {

      'use strict';
      const LexemeReference = __webpack_require__(6);
      class LexicalRelation extends LexemeReference {
        constructor(data) {
          super(data);
          if (typeof this.relation !== 'string') {
            throw new Error(`The lexical relation must have a "relation" property.`);
          }
        }
      }
      module.exports = LexicalRelation;

      /***/
    },

    /* 51 */
    /***/
    function(module, exports, __webpack_require__) {

      'use strict';
      const { Model } = __webpack_require__(5);
      const MultiLangString = __webpack_require__(1);
      const Note = __webpack_require__(2);
      const Tags = __webpack_require__(3);
      const Transcription = __webpack_require__(4);
      const Word = __webpack_require__(21);
      const {
        addAbbreviation,
        addType,
        addURL,
        aliasLanguage,
        aliasTranscription,
        defineArray,
        defineProp,
        simplify,
      } = __webpack_require__(0);
      const checkKey = key => {
        if (!/^[(a-z)|(A-Z)|(0-9)]+\.[0-9]{1,3}$/.test(key)) {
          throw new Error(`Improperly formatted key.`);
        }
      };
      const checkTimes = (start, end) => {
        if (!(typeof start === `number` && typeof end === `number`)) {
          throw new TypeError(`Both "startTime" and "endTime" must be Numbers.`);
        }
        if (start > end) throw new RangeError(`The value of the "endTime" property must be greater than the value of the "startTime" property.`);
      };
      class Sentence extends Model {
        constructor(data = {}) {
          if (data instanceof Sentence) return data;
          if (typeof data !== `object`) {
            throw new TypeError(`The data passed to the Sentence constructor must be an object.`);
          }
          if (!(`endTime` in data && `startTime` in data || !(`endTime` in data || `startTime` in data))) {
            throw new Error(`The "startTime" and "endTime" properties must either both be absent, or both be present.`);
          }
          if (`startTime` in data || `endTime` in data) checkTimes(data.startTime, data.endTime);
          if (`key` in data) checkKey(data.key);
          super();
          Object.assign(this, data);
          addAbbreviation(this, `defaultAnalysisLanguage`, data.defaultAnalysisLanguage || `eng`);
          addAbbreviation(this, `defaultOrthography`, data.defaultOrthography || `ipa`);
          addAbbreviation(this, `language`, data.language);
          addAbbreviation(this, `speaker`, data.speaker);
          addType(this, `Sentence`);
          addURL(this, `url`, data.url);
          defineProp(this, `tags`, Tags, data.tags || {});
          defineProp(this, `transcript`, Transcription, data.transcript || {});
          defineProp(this, `transcription`, Transcription, data.transcription || {});
          defineProp(this, `translation`, MultiLangString, data.translation || {});
          defineArray(this, `notes`, Note, data.notes);
          defineArray(this, `words`, Word, data.words);
          aliasLanguage(this, `translation`, `tln`);
          aliasTranscription(this, `transcription`, `txn`);
          aliasTranscription(this, `transcript`, `tx`);
          if (`endTime` in data) this.endTime = Number(data.endTime.toFixed(3));
          if (`startTime` in data) this.startTime = Number(data.startTime.toFixed(3));
          const handler = {
            set(target, prop, val, proxy) {
              let newVal = val;
              switch (prop) {
                case `endTime`:
                  checkTimes(target.startTime, val);
                  newVal = Number(val.toFixed(3));
                  break;
                case `key`:
                  checkKey(val);
                  break;
                case `startTime`:
                  checkTimes(val, target.endTime);
                  newVal = Number(val.toFixed(3));
                  break;
                default:
                  break;
              }
              return Reflect.set(target, prop, newVal, proxy);
            },
          };
          return new Proxy(this, handler);
        }

        toJSON() {
          return simplify(this, [`transcription`, `translation`, `words`]);
        }
      }
      module.exports = Sentence;

      /***/
    },

    /* 52 */
    /***/
    function(module, exports, __webpack_require__) {

      'use strict';
      const { Model } = __webpack_require__(5);
      const Morpheme = __webpack_require__(22);
      const MultiLangString = __webpack_require__(1);
      const Note = __webpack_require__(2);
      const Transcription = __webpack_require__(4);
      const {
        addAbbreviation,
        addType,
        addURL,
        aliasLanguage,
        aliasTranscription,
        defineArray,
        defineProp,
        simplify,
      } = __webpack_require__(0);
      const checkKey = key => {
        if (!/^[(a-z)|(A-Z)|(0-9)]+\.[0-9]{1,3}\.[0-9]{1,2}$/.test(key)) {
          throw new Error(`Improperly formatted key.`);
        }
      };
      class Word extends Model {
        constructor(data = {}) {
          if (data instanceof Word) return data;
          if (typeof data !== `object`) {
            throw new TypeError(`The data passed to the Word constructor must be an object if present.`);
          }
          if (`key` in data) checkKey(data.key);
          super();
          Object.assign(this, data);
          addAbbreviation(this, `defaultAnalysisLanguage`, data.defaultAnalysisLanguage || `eng`);
          addAbbreviation(this, `defaultOrthography`, data.defaultOrthography || `ipa`);
          addType(this, `Word`);
          addURL(this, `url`, data.url);
          defineProp(this, `gloss`, MultiLangString, data.gloss || {});
          defineProp(this, `transcription`, Transcription, data.transcription || {});
          defineProp(this, `translation`, MultiLangString, data.translation || {});
          defineArray(this, `morphemes`, Morpheme, data.morphemes);
          defineArray(this, `notes`, Note, data.notes);
          aliasLanguage(this, `gloss`, `gl`);
          aliasLanguage(this, `translation`, `tln`);
          aliasTranscription(this, `transcription`, `txn`);
          return new Proxy(this, {
            set(target, prop, val, proxy) {
              if (prop === `key`) checkKey(val);
              return Reflect.set(target, prop, val, proxy);
            },
          });
        }

        toJSON() {
          return simplify(this, [`morphemes`, `transcription`]);
        }
      }
      module.exports = Word;

      /***/
    },

    /* 53 */
    /***/
    function(module, exports, __webpack_require__) {

      'use strict';
      const LexemeReference = __webpack_require__(6);
      const { Model } = __webpack_require__(5);
      const MultiLangString = __webpack_require__(1);
      const Note = __webpack_require__(2);
      const Tags = __webpack_require__(3);
      const Transcription = __webpack_require__(4);
      const {
        addAbbreviation,
        addType,
        aliasLanguage,
        aliasTranscription,
        defineArray,
        defineProp,
        simplify,
      } = __webpack_require__(0);
      class Morpheme extends Model {
        constructor(data = {}) {
          if (!(data instanceof Object)) {
            throw new TypeError(`The "data" argument must be an Object.`);
          }
          super();
          Object.assign(this, data);
          addAbbreviation(this, `defaultAnalysisLanguage`, data.defaultAnalysisLanguage || `eng`);
          addAbbreviation(this, `defaultOrthography`, data.defaultOrthography || `ipa`);
          addType(this, `Morpheme`);
          defineProp(this, `gloss`, MultiLangString, data.gloss || {});
          defineProp(this, `lexeme`, LexemeReference, data.lexeme || {});
          defineProp(this, `tags`, Tags, data.tags || {});
          defineProp(this, `transcription`, Transcription, data.transcription || {});
          defineArray(this, `notes`, Note, data.notes);
          aliasLanguage(this, `gloss`, `gl`);
          aliasTranscription(this, `transcription`, `txn`);
        }

        toJSON() {
          return simplify(this, [`gloss`, `transcription`]);
        }
      }
      module.exports = Morpheme;

      /***/
    },

    /* 54 */
    /***/
    function(module, exports, __webpack_require__) {

      'use strict';
      const LexemeReference = __webpack_require__(6);
      const LexicalRelation = __webpack_require__(13);
      const MultiLangString = __webpack_require__(1);
      const Note = __webpack_require__(2);
      const Sentence = __webpack_require__(10);
      const Reference = __webpack_require__(8);
      const Tags = __webpack_require__(3);
      const Variant = __webpack_require__(14);
      const {
        addAbbreviation,
        addType,
        aliasLanguage,
        defineArray,
        defineProp,
        getUniqueReferences,
        simplify,
      } = __webpack_require__(0);
      class Sense {
        constructor(data = {}) {
          if (data instanceof Sense) return data;
          if (typeof data !== `object`) {
            throw new TypeError(`The data passed to the Sense constructor must be an object.`);
          }
          Object.assign(this, data);
          addAbbreviation(this, `defaultAnalysisLanguage`, data.defaultAnalysisLanguage);
          addType(this, `Sense`);
          defineProp(this, `argumentStructure`, String, data.argumentStructure);
          defineProp(this, `category`, MultiLangString, data.category || {});
          defineProp(this, `definition`, MultiLangString, data.definition || {});
          defineProp(this, `derives`, MultiLangString, data.derives);
          defineProp(this, `gloss`, MultiLangString, data.gloss || {});
          defineProp(this, `inflectionClass`, MultiLangString, data.inflectionClass);
          defineProp(this, `scientificName`, String, data.scientificName);
          defineProp(this, `tags`, Tags, data.tags || {});
          defineProp(this, `variantOf`, LexemeReference, data.variantOf);
          defineProp(this, `variantType`, MultiLangString, data.variantType);
          defineArray(this, `examples`, Sentence, data.examples);
          defineArray(this, `lexicalRelations`, LexicalRelation, getUniqueReferences(data.lexicalRelations || []));
          defineArray(this, `notes`, Note, data.notes);
          defineArray(this, `references`, Reference, data.references);
          defineArray(this, `sources`, String, data.sources);
          defineArray(this, `usages`, MultiLangString, data.usages);
          defineArray(this, `variants`, Variant, getUniqueReferences(data.variants || []));
          aliasLanguage(this, `category`, `pos`);
          aliasLanguage(this, `definition`, `def`);
          aliasLanguage(this, `derives`, `$derives`);
          aliasLanguage(this, `gloss`, `gl`);
          aliasLanguage(this, `inflectionClass`, `$inflectionClass`);
          aliasLanguage(this, `variantType`, `$variantType`);
        }

        toJSON() {
          return simplify(this, [`gloss`]);
        }
      }
      module.exports = Sense;

      /***/
    },

    /* 55 */
    /***/
    function(module, exports, __webpack_require__) {

      'use strict';
      const LexemeReference = __webpack_require__(6);
      class Variant extends LexemeReference {
        constructor(data) {
          super(data);
          if (!(this.variantType instanceof Object)) {
            throw new Error(`The variant must have a "variantType" property.`);
          }
        }
      }
      module.exports = Variant;

      /***/
    },

    /* 56 */
    /***/
    function(module, exports, __webpack_require__) {

      'use strict';
      const Media = __webpack_require__(57);
      module.exports = Media;

      /***/
    },

    /* 57 */
    /***/
    function(module, exports, __webpack_require__) {

      'use strict';
      const Access = __webpack_require__(9);
      const Location = __webpack_require__(7);
      const MultiLangString = __webpack_require__(1);
      const Note = __webpack_require__(2);
      const Person = __webpack_require__(24);
      const Tags = __webpack_require__(3);
      const {
        addAbbreviation,
        addType,
        addURL,
        aliasLanguage,
        checkProp,
        defineArray,
        defineProp,
        simplify,
      } = __webpack_require__(0);
      const checkTimes = (start, end) => {
        if (!(typeof start === `number` && typeof end === `number`)) {
          throw new TypeError(`Both "startTime" and "endTime" must be Numbers.`);
        }
        if (start > end) throw new RangeError(`The value of the "endTime" property must be greater than the value of the "startTime" property.`);
      };
      class Media {
        constructor(data = {}) {
          if (!(data instanceof Object)) {
            throw new TypeError(`The data passed to the Location constructor must be an Object.`);
          }
          if (!(`endTime` in data && `startTime` in data || !(`endTime` in data || `startTime` in data))) {
            throw new Error(`The "startTime" and "endTime" properties must either both be absent, or both be present.`);
          }
          if (`startTime` in data || `endTime` in data) checkTimes(data.startTime, data.endTime);
          if (`fileSize` in data) checkProp(data.fileSize, `integer`, `fileSize`);
          Object.assign(this, data);
          addAbbreviation(this, `abbreviation`, data.abbreviation);
          addAbbreviation(this, `defaultAnalysisLanguage`, data.defaultAnalysisLanguage || `eng`);
          addType(this, `Media`);
          addURL(this, `mediaURL`, data.mediaURL);
          addURL(this, `original`, data.original);
          addURL(this, `url`, data.url);
          defineProp(this, `access`, Access, data.access || {});
          defineProp(this, `content`, MultiLangString, data.content || {});
          defineProp(this, `contentType`, String, data.contentType);
          defineProp(this, `creator`, Person, data.creator);
          defineProp(this, `dateCreated`, Date, data.dateCreated || new Date);
          defineProp(this, `dateModified`, Date, data.dateModified || new Date);
          defineProp(this, `dateRecorded`, Date, data.dateRecorded || new Date);
          defineProp(this, `filename`, String, data.filename || ``);
          defineProp(this, `format`, String, data.format);
          defineProp(this, `length`, Number, data.length);
          defineProp(this, `location`, Location, data.location);
          defineProp(this, `tags`, Tags, data.tags || {});
          defineArray(this, `notes`, Note, data.notes || []);
          defineArray(this, `people`, Person, data.people || []);
          aliasLanguage(this, `content`, `$content`);
          if (`endTime` in data) this.endTime = Number(data.endTime.toFixed(3));
          if (`startTime` in data) this.startTime = Number(data.startTime.toFixed(3));
          const languages = new Set;
          Object.defineProperty(languages, `add`, {
            configurable: false,
            enumerable:   false,
            value:        new Proxy(languages.add, {
              apply(target, context, [val]) {
                if (typeof val !== `string`) {
                  throw new TypeError(`The value to add to "languages" must be a String.`);
                }
                return Reflect.apply(target, context, [val]);
              },
            }),
            writable: false,
          });
          Object.defineProperty(this, `languages`, {
            configurable: false,
            enumerable:   true,
            value:        languages,
            writable:     false,
          });
          Array.from(data.languages || []).forEach(env => this.languages.add(env));
          const handler = {
            set(target, prop, val, proxy) {
              let newVal = val;
              switch (prop) {
                case `endTime`:
                  checkTimes(target.startTime, val);
                  newVal = Number(val.toFixed(3));
                  break;
                case `fileSize`:
                  checkProp(val, `integer`, `fileSize`);
                  break;
                case `startTime`:
                  checkTimes(val, target.endTime);
                  newVal = Number(val.toFixed(3));
                  break;
                default:
                  break;
              }
              return Reflect.set(target, prop, newVal, proxy);
            },
          };
          return new Proxy(this, handler);
        }

        anonymize() {
          if (this.people) this.people.forEach(person => person.anonymize());
        }

        toJSON() {
          const data = simplify(this, [`filename`]);
          data.languages = Array.from(this.languages);
          return data;
        }
      }
      module.exports = Media;

      /***/
    },

    /* 58 */
    /***/
    function(module, exports, __webpack_require__) {

      'use strict';
      const Access = __webpack_require__(9);
      const Address = __webpack_require__(12);
      const Language = __webpack_require__(18);
      const Location = __webpack_require__(7);
      const Note = __webpack_require__(2);
      const Tags = __webpack_require__(3);
      const {
        addAbbreviation,
        addType,
        addURL,
        checkProp,
        defineArray,
        defineProp,
        simplify,
      } = __webpack_require__(0);
      class LanguageSpoken extends Language {
        constructor(data = {}) {
          if (`ageLearned` in data) checkProp(data.ageLearned, `integer`, `ageLearned`);
          if (`yearsKnown` in data) checkProp(data.yearsKnown, `integer`, `yearsKnown`);
          super(data);
          defineProp(this, `proficiency`, String, data.proficiency);
          let ageLearned;
          let yearsKnown;
          Object.defineProperties(this, {
            ageLearned: {
              configurable: true,
              enumerable:   true,
              get() {
                return ageLearned;
              },
              set(val) {
                checkProp(val, `integer`, `ageLearned`);
                ageLearned = val;
              },
            },
            yearsKnown: {
              configurable: true,
              enumerable:   true,
              get() {
                return yearsKnown;
              },
              set(val) {
                checkProp(val, `integer`, `yearsKnown`);
                yearsKnown = val;
              },
            },
          });
        }
      }
      class Person {
        constructor(data = {}) {
          if (!(data instanceof Object)) {
            throw new TypeError(`The data passed to the Location constructor must be an Object.`);
          }
          Object.assign(this, data);
          addAbbreviation(this, `abbreviation`, data.abbreviation);
          addType(this, `Person`);
          addURL(this, `url`, data.url);
          defineProp(this, `access`, Access, data.access || {});
          defineProp(this, `address`, Address, data.address);
          defineProp(this, `birthDate`, Date, data.birthDate);
          defineProp(this, `birthPlace`, Location, data.birthPlace);
          defineProp(this, `email`, String, data.email);
          defineProp(this, `familyName`, String, data.familyName || ``);
          defineProp(this, `gender`, String, data.gender);
          defineProp(this, `givenName`, String, data.givenName || ``);
          defineProp(this, `phone`, String, data.phone);
          defineProp(this, `pseudonym`, String, data.pseudonym);
          defineProp(this, `tags`, Tags, data.tags || {});
          defineArray(this, `languagesSpoken`, LanguageSpoken, data.languagesSpoken || []);
          defineArray(this, `notes`, Note, data.notes || []);
          defineArray(this, `roles`, String, data.roles || []);
        }

        anonymize() {
          Reflect.deleteProperty(this, `email`);
          Reflect.deleteProperty(this, `familyName`);
          Reflect.deleteProperty(this, `givenName`);
        }

        toJSON() {
          return simplify(this, [`familyName`, `givenName`]);
        }
      }
      module.exports = Person;

      /***/
    },

    /* 59 */
    /***/
    function(module, exports, __webpack_require__) {

      'use strict';
      const Phone = __webpack_require__(60);
      module.exports = Phone;

      /***/
    },

    /* 60 */
    /***/
    function(module, exports, __webpack_require__) {

      'use strict';
      const Note = __webpack_require__(2);
      const Tags = __webpack_require__(3);
      const {
        addType,
        defineArray,
        defineProp,
        simplify,
      } = __webpack_require__(0);
      const defaults = {
        phoneme: '',
      };
      class Phone {
        constructor(data = defaults) {
          if (!(data instanceof Object)) {
            throw new TypeError(`The "data" argument must be an Object if present.`);
          }
          Object.assign(this, data);
          addType(this, `Phone`);
          defineProp(this, `allophone`, String, data.allophone || ``);
          defineProp(this, `phoneme`, String, data.phoneme || ``);
          defineProp(this, `tags`, Tags, data.tags || {});
          defineArray(this, `notes`, Note, data.notes);
        }

        toJSON() {
          return simplify(this, [`phoneme`]);
        }
      }
      module.exports = Phone;

      /***/
    },

    /** ****/
  ]));
