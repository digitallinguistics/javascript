/**
 * An object containing lists of distinctive features in phonology
 * @type {Object}
 * @module features
 * @memberof dlx.data
 * @prop {Array} airstream  A list of airstream mechanisms
 * @prop {Array} backness   A list of horizontal positions in the mouth (front-back)
 * @prop {Array} diacritics A list of diacritical features
 * @prop {Array} height     A list of vertical positions in the mouth
 * @prop {Array} length     A list of lengths for vowels and consonants
 * @prop {Array} manner     A list of manners of articulation
 * @prop {Array} place      A list of places of articulation
 * @prop {Array} rounding   A list of rounding types
 * @prop {Array} voicing    A list of voicing types
 */

/**
 * Airstream mechanisms
 * @enum {String}
 * @instance
 * @prop {String} airstream click
 * @prop {String} airstream ejective
 * @prop {String} airstream implosive
 * @prop {String} airstream pulmonic
 */
const airstream = [
  'click',
  'ejective',
  'implosive',
  'ingressive',
  'pulmonic',
];

/**
 * Backness of a vowel
 * @enum {String}
 * @instance
 * @prop {String} backness front
 * @prop {String} backness near-front
 * @prop {String} backness central
 * @prop {String} backness near-back
 * @prop {String} backness back
 */
const backness = [
  'front',
  'near-front',
  'central',
  'near-back',
  'back',
];

/**
 * A list of diacritical features
 * @enum {String}
 * @instance
 * @prop {String} diacritics advanced
 * @prop {String} diacritics advanced tongue root
 * @prop {String} diacritics affricativized
 * @prop {String} diacritics alveolar
 * @prop {String} diacritics apical
 * @prop {String} diacritics aspirated
 * @prop {String} diacritics breathy
 * @prop {String} diacritics centralized
 * @prop {String} diacritics close
 * @prop {String} diacritics creaky
 * @prop {String} diacritics dental
 * @prop {String} diacritics fortis
 * @prop {String} diacritics fricativized
 * @prop {String} diacritics labialized
 * @prop {String} diacritics laminal
 * @prop {String} diacritics lateral release
 * @prop {String} diacritics lax
 * @prop {String} diacritics lenis
 * @prop {String} diacritics lightly aspirated
 * @prop {String} diacritics linguolabial
 * @prop {String} diacritics lowered
 * @prop {String} diacritics mid-centralized
 * @prop {String} diacritics nasal release
 * @prop {String} diacritics nasalized
 * @prop {String} diacritics no release
 * @prop {String} diacritics non-syllabic
 * @prop {String} diacritics open
 * @prop {String} diacritics palatalized
 * @prop {String} diacritics pharyngealized
 * @prop {String} diacritics plain
 * @prop {String} diacritics raised
 * @prop {String} diacritics retracted
 * @prop {String} diacritics retracted tongue root
 * @prop {String} diacritics retroflexed
 * @prop {String} diacritics rhotic
 * @prop {String} diacritics rounded
 * @prop {String} diacritics sibilant
 * @prop {String} diacritics syllabic
 * @prop {String} diacritics tense
 * @prop {String} diacritics unrounded
 * @prop {String} diacritics velarized
 * @prop {String} diacritics voiced
 * @prop {String} diacritics voiceless
 * @prop {String} diacritics weakly aspirated
 */
const diacritics = [
  'advanced',
  'advanced tongue root',
  'affricativized',
  'alveolar',
  'apical',
  'aspirated',
  'breathy',
  'centralized',
  'close',
  'creaky',
  'dental',
  'fortis',
  'fricativized',
  'labialized',
  'laminal',
  'lateral release',
  'lax',
  'lenis',
  'lightly aspirated',
  'linguolabial',
  'lowered',
  'mid-centralized',
  'nasal release',
  'nasalized',
  'no release',
  'non-syllabic',
  'open',
  'palatalized',
  'pharyngealized',
  'plain',
  'raised',
  'retracted',
  'retracted tongue root',
  'retroflexed',
  'rhotic',
  'rounded',
  'sibilant',
  'syllabic',
  'tense',
  'unrounded',
  'velarized',
  'voiced',
  'voiceless',
  'weakly aspirated',
];

/**
 * A list of vowel heights
 * @enum {String}
 * @instance
 * @prop {String} height close
 * @prop {String} height near-close
 * @prop {String} height close-mid
 * @prop {String} height mid
 * @prop {String} height open-mid
 * @prop {String} height near-open
 * @prop {String} height open
 */
const height = [
  'close',
  'near-close',
  'close-mid',
  'mid',
  'open-mid',
  'near-open',
  'open',
];

/**
 * A list of types of lengths of segments
 * @enum {String}
 * @instance
 * @prop {String} length extra long
 * @prop {String} length extra short
 * @prop {String} length geminate
 * @prop {String} length half long
 * @prop {String} length long
 * @prop {String} length short
 */
const length = [
  'extra long',
  'extra short',
  'geminate',
  'half long',
  'long',
  'short',
];

/**
 * A list of manners of articulation
 * @enum {String}
 * @instance
 * @prop {String} manner approximate
 * @prop {String} manner flap
 * @prop {String} manner fricative
 * @prop {String} manner lateral
 * @prop {String} manner nasal
 * @prop {String} manner plosive
 * @prop {String} manner tap
 * @prop {String} manner trill
 */
const manner = [
  'approximate',
  'flap',
  'fricative',
  'lateral',
  'nasal',
  'plosive',
  'tap',
  'trill',
];

/**
 * A list of places of articulation
 * @enum {String}
 * @instance
 * @prop {String} place bilabial
 * @prop {String} place labiodental
 * @prop {String} place labiovelar
 * @prop {String} place dental
 * @prop {String} place alveolar
 * @prop {String} place lateral
 * @prop {String} place post-alveolar
 * @prop {String} place alveo-palatal
 * @prop {String} place palato-alveolar
 * @prop {String} place retroflex
 * @prop {String} place palatal
 * @prop {String} place velar
 * @prop {String} place uvular
 * @prop {String} place pharyngeal
 * @prop {String} place glottal
 * @prop {String} place epiglottal
 */
const place = [
  'bilabial',
  'labiodental',
  'labiovelar',
  'dental',
  'alveolar',
  'lateral',
  'post-alveolar',
  'alveo-palatal',
  'palato-alveolar',
  'retroflex',
  'palatal',
  'velar',
  'uvular',
  'pharyngeal',
  'glottal',
  'epiglottal',
];

/**
 * A list of types of rounding
 * @enum {String}
 * @instance
 * @prop {String} rounding compressed
 * @prop {String} rounding protruded
 * @prop {String} rounding rounded
 * @prop {String} rounding unrounded
 */
const rounding = [
  'compressed',
  'protruded',
  'rounded',
  'unrounded',
];

/**
 * A list of voicing values
 * @enum {String}
 * @instance
 * @prop {String} voicing semivoiced
 * @prop {String} voicing voiced
 * @prop {String} voicing voiceless
 */
const voicing = [
  'semivoiced',
  'voiced',
  'voiceless',
];

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
