"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/pluralize-esm";
exports.ids = ["vendor-chunks/pluralize-esm"];
exports.modules = {

/***/ "(ssr)/./node_modules/pluralize-esm/dist/index.cjs":
/*!***************************************************!*\
  !*** ./node_modules/pluralize-esm/dist/index.cjs ***!
  \***************************************************/
/***/ ((module) => {

eval("\n\nconst pluralRules = [];\nconst singularRules = [];\nconst uncountables = /* @__PURE__ */new Set();\nconst irregularPlurals = /* @__PURE__ */new Map();\nconst irregularSingles = /* @__PURE__ */new Map();\nconst sanitizeRule = rule => typeof rule === \"string\" ? new RegExp(\"^\".concat(rule, \"$\"), \"i\") : rule;\nconst restoreCase = (word, token) => {\n  if (typeof token !== \"string\") return word;\n  if (word === token) return token;\n  if (word === word.toLowerCase()) return token.toLowerCase();\n  if (word === word.toUpperCase()) return token.toUpperCase();\n  if (word[0] === word[0].toUpperCase()) {\n    return token.charAt(0).toUpperCase() + token.substr(1).toLowerCase();\n  }\n  return token.toLowerCase();\n};\nconst sanitizeWord = (token, word, rules) => {\n  if (!token.length || uncountables.has(token)) {\n    return word;\n  }\n  let {\n    length: len\n  } = rules;\n  while (len--) {\n    const rule = rules[len];\n    if (rule[0].test(word)) {\n      return word.replace(rule[0], function () {\n        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n          args[_key] = arguments[_key];\n        }\n        const [match, index] = args;\n        const result = rule[1].replace(/\\$(\\d{1,2})/g, (_, index2) => args[index2] || \"\");\n        if (match === \"\") {\n          return restoreCase(word[index - 1], result);\n        }\n        return restoreCase(match, result);\n      });\n    }\n  }\n  return word;\n};\nconst compute = (word, replaceMap, keepMap, rules) => {\n  const token = word.toLowerCase();\n  if (keepMap.has(token)) {\n    return restoreCase(word, token);\n  }\n  if (replaceMap.has(token)) {\n    return restoreCase(word, replaceMap.get(token));\n  }\n  return sanitizeWord(token, word, rules);\n};\nconst mapHas = (word, replaceMap, keepMap, rules) => {\n  const token = word.toLowerCase();\n  if (keepMap.has(token)) return true;\n  if (replaceMap.has(token)) return false;\n  return sanitizeWord(token, token, rules) === token;\n};\nconst pluralize = (word, count, inclusive) => {\n  const pluralized = count === 1 ? pluralize.singular(word) : pluralize.plural(word);\n  if (inclusive) return \"\".concat(count, \" \").concat(pluralized);\n  return pluralized;\n};\npluralize.plural = word => compute(word, irregularSingles, irregularPlurals, pluralRules);\npluralize.singular = word => compute(word, irregularPlurals, irregularSingles, singularRules);\npluralize.addPluralRule = (rule, replacement) => {\n  pluralRules.push([sanitizeRule(rule), replacement]);\n};\npluralize.addSingularRule = (rule, replacement) => {\n  singularRules.push([sanitizeRule(rule), replacement]);\n};\npluralize.addIrregularRule = (single, plural) => {\n  const _plural = plural.toLowerCase();\n  const _single = single.toLowerCase();\n  irregularSingles.set(_single, _plural);\n  irregularPlurals.set(_plural, _single);\n};\npluralize.addUncountableRule = rule => {\n  if (typeof rule === \"string\") {\n    uncountables.add(rule.toLowerCase());\n    return;\n  }\n  pluralize.addPluralRule(rule, \"$0\");\n  pluralize.addSingularRule(rule, \"$0\");\n};\npluralize.isPlural = word => mapHas(word, irregularSingles, irregularPlurals, pluralRules);\npluralize.isSingular = word => mapHas(word, irregularPlurals, irregularSingles, singularRules);\nconst defaultIrregulars = [\n// Pronouns.\n[\"I\", \"we\"], [\"me\", \"us\"], [\"he\", \"they\"], [\"she\", \"they\"], [\"them\", \"them\"], [\"myself\", \"ourselves\"], [\"yourself\", \"yourselves\"], [\"itself\", \"themselves\"], [\"herself\", \"themselves\"], [\"himself\", \"themselves\"], [\"themself\", \"themselves\"], [\"is\", \"are\"], [\"was\", \"were\"], [\"has\", \"have\"], [\"this\", \"these\"], [\"that\", \"those\"], [\"my\", \"our\"], [\"its\", \"their\"], [\"his\", \"their\"], [\"her\", \"their\"],\n// Words ending in with a consonant and `o`.\n[\"echo\", \"echoes\"], [\"dingo\", \"dingoes\"], [\"volcano\", \"volcanoes\"], [\"tornado\", \"tornadoes\"], [\"torpedo\", \"torpedoes\"],\n// Ends with `us`.\n[\"genus\", \"genera\"], [\"viscus\", \"viscera\"],\n// Ends with `ma`.\n[\"stigma\", \"stigmata\"], [\"stoma\", \"stomata\"], [\"dogma\", \"dogmata\"], [\"lemma\", \"lemmata\"], [\"schema\", \"schemata\"], [\"anathema\", \"anathemata\"],\n// Other irregular rules.\n[\"ox\", \"oxen\"], [\"axe\", \"axes\"], [\"die\", \"dice\"], [\"yes\", \"yeses\"], [\"foot\", \"feet\"], [\"eave\", \"eaves\"], [\"goose\", \"geese\"], [\"tooth\", \"teeth\"], [\"quiz\", \"quizzes\"], [\"human\", \"humans\"], [\"proof\", \"proofs\"], [\"carve\", \"carves\"], [\"valve\", \"valves\"], [\"looey\", \"looies\"], [\"thief\", \"thieves\"], [\"groove\", \"grooves\"], [\"pickaxe\", \"pickaxes\"], [\"passerby\", \"passersby\"], [\"canvas\", \"canvases\"]];\nconst defaultPlurals = [[/s?$/i, \"s\"], [/[^\\u0000-\\u007F]$/i, \"$0\"], [/([^aeiou]ese)$/i, \"$1\"], [/(ax|test)is$/i, \"$1es\"], [/(alias|[^aou]us|t[lm]as|gas|ris)$/i, \"$1es\"], [/(e[mn]u)s?$/i, \"$1s\"], [/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i, \"$1\"], [/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, \"$1i\"], [/(alumn|alg|vertebr)(?:a|ae)$/i, \"$1ae\"], [/(seraph|cherub)(?:im)?$/i, \"$1im\"], [/(her|at|gr)o$/i, \"$1oes\"], [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i, \"$1a\"], [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i, \"$1a\"], [/sis$/i, \"ses\"], [/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i, \"$1$2ves\"], [/([^aeiouy]|qu)y$/i, \"$1ies\"], [/([^ch][ieo][ln])ey$/i, \"$1ies\"], [/(x|ch|ss|sh|zz)$/i, \"$1es\"], [/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i, \"$1ices\"], [/\\b((?:tit)?m|l)(?:ice|ouse)$/i, \"$1ice\"], [/(pe)(?:rson|ople)$/i, \"$1ople\"], [/(child)(?:ren)?$/i, \"$1ren\"], [/eaux$/i, \"$0\"], [/m[ae]n$/i, \"men\"], [\"thou\", \"you\"]];\nconst defaultSingles = [[/s$/i, \"\"], [/(ss)$/i, \"$1\"], [/(wi|kni|(?:after|half|high|low|mid|non|night|[^\\w]|^)li)ves$/i, \"$1fe\"], [/(ar|(?:wo|[ae])l|[eo][ao])ves$/i, \"$1f\"], [/ies$/i, \"y\"], [/(dg|ss|ois|lk|ok|wn|mb|th|ch|ec|oal|is|ck|ix|sser|ts|wb)ies$/i, \"$1ie\"], [/\\b(l|(?:neck|cross|hog|aun)?t|coll|faer|food|gen|goon|group|hipp|junk|vegg|(?:pork)?p|charl|calor|cut)ies$/i, \"$1ie\"], [/\\b(mon|smil)ies$/i, \"$1ey\"], [/\\b((?:tit)?m|l)ice$/i, \"$1ouse\"], [/(seraph|cherub)im$/i, \"$1\"], [/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i, \"$1\"], [/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i, \"$1sis\"], [/(movie|twelve|abuse|e[mn]u)s$/i, \"$1\"], [/(test)(?:is|es)$/i, \"$1is\"], [/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, \"$1us\"], [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i, \"$1um\"], [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i, \"$1on\"], [/(alumn|alg|vertebr)ae$/i, \"$1a\"], [/(cod|mur|sil|vert|ind)ices$/i, \"$1ex\"], [/(matr|append)ices$/i, \"$1ix\"], [/(pe)(rson|ople)$/i, \"$1rson\"], [/(child)ren$/i, \"$1\"], [/(eau)x?$/i, \"$1\"], [/men$/i, \"man\"]];\nconst defaultUncountables = [\n// Singular words with no plurals.\n\"adulthood\", \"advice\", \"agenda\", \"aid\", \"aircraft\", \"alcohol\", \"ammo\", \"analytics\", \"anime\", \"athletics\", \"audio\", \"bison\", \"blood\", \"bream\", \"buffalo\", \"butter\", \"carp\", \"cash\", \"chassis\", \"chess\", \"clothing\", \"cod\", \"commerce\", \"cooperation\", \"corps\", \"debris\", \"diabetes\", \"digestion\", \"elk\", \"energy\", \"equipment\", \"excretion\", \"expertise\", \"firmware\", \"flounder\", \"fun\", \"gallows\", \"garbage\", \"graffiti\", \"hardware\", \"headquarters\", \"health\", \"herpes\", \"highjinks\", \"homework\", \"housework\", \"information\", \"jeans\", \"justice\", \"kudos\", \"labour\", \"literature\", \"machinery\", \"mackerel\", \"mail\", \"media\", \"mews\", \"moose\", \"music\", \"mud\", \"manga\", \"news\", \"only\", \"personnel\", \"pike\", \"plankton\", \"pliers\", \"police\", \"pollution\", \"premises\", \"rain\", \"research\", \"rice\", \"salmon\", \"scissors\", \"series\", \"sewage\", \"shambles\", \"shrimp\", \"software\", \"staff\", \"swine\", \"tennis\", \"traffic\", \"transportation\", \"trout\", \"tuna\", \"wealth\", \"welfare\", \"whiting\", \"wildebeest\", \"wildlife\", \"you\", /pok[eé]mon$/i,\n// Regexes.\n/[^aeiou]ese$/i,\n// \"chinese\", \"japanese\"\n/deer$/i,\n// \"deer\", \"reindeer\"\n/fish$/i,\n// \"fish\", \"blowfish\", \"angelfish\"\n/measles$/i, /o[iu]s$/i,\n// \"carnivorous\"\n/pox$/i,\n// \"chickpox\", \"smallpox\"\n/sheep$/i];\nfor (const [single, plural] of defaultIrregulars) {\n  pluralize.addIrregularRule(single, plural);\n}\nfor (const [search, replacement] of defaultPlurals) {\n  pluralize.addPluralRule(search, replacement);\n}\nfor (const [search, replacement] of defaultSingles) {\n  pluralize.addSingularRule(search, replacement);\n}\nfor (const search of defaultUncountables) {\n  pluralize.addUncountableRule(search);\n}\nmodule.exports = pluralize;\n//# sourceMappingURL=index.cjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcGx1cmFsaXplLWVzbS9kaXN0L2luZGV4LmNqcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRFQUE0RSxhQUFhO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxJQUFJO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1zYW5pdHktYXBwLy4vbm9kZV9tb2R1bGVzL3BsdXJhbGl6ZS1lc20vZGlzdC9pbmRleC5janM/ZWVjOSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHBsdXJhbFJ1bGVzID0gW107XG5jb25zdCBzaW5ndWxhclJ1bGVzID0gW107XG5jb25zdCB1bmNvdW50YWJsZXMgPSAvKiBAX19QVVJFX18gKi9uZXcgU2V0KCk7XG5jb25zdCBpcnJlZ3VsYXJQbHVyYWxzID0gLyogQF9fUFVSRV9fICovbmV3IE1hcCgpO1xuY29uc3QgaXJyZWd1bGFyU2luZ2xlcyA9IC8qIEBfX1BVUkVfXyAqL25ldyBNYXAoKTtcbmNvbnN0IHNhbml0aXplUnVsZSA9IHJ1bGUgPT4gdHlwZW9mIHJ1bGUgPT09IFwic3RyaW5nXCIgPyBuZXcgUmVnRXhwKFwiXlwiLmNvbmNhdChydWxlLCBcIiRcIiksIFwiaVwiKSA6IHJ1bGU7XG5jb25zdCByZXN0b3JlQ2FzZSA9ICh3b3JkLCB0b2tlbikgPT4ge1xuICBpZiAodHlwZW9mIHRva2VuICE9PSBcInN0cmluZ1wiKSByZXR1cm4gd29yZDtcbiAgaWYgKHdvcmQgPT09IHRva2VuKSByZXR1cm4gdG9rZW47XG4gIGlmICh3b3JkID09PSB3b3JkLnRvTG93ZXJDYXNlKCkpIHJldHVybiB0b2tlbi50b0xvd2VyQ2FzZSgpO1xuICBpZiAod29yZCA9PT0gd29yZC50b1VwcGVyQ2FzZSgpKSByZXR1cm4gdG9rZW4udG9VcHBlckNhc2UoKTtcbiAgaWYgKHdvcmRbMF0gPT09IHdvcmRbMF0udG9VcHBlckNhc2UoKSkge1xuICAgIHJldHVybiB0b2tlbi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHRva2VuLnN1YnN0cigxKS50b0xvd2VyQ2FzZSgpO1xuICB9XG4gIHJldHVybiB0b2tlbi50b0xvd2VyQ2FzZSgpO1xufTtcbmNvbnN0IHNhbml0aXplV29yZCA9ICh0b2tlbiwgd29yZCwgcnVsZXMpID0+IHtcbiAgaWYgKCF0b2tlbi5sZW5ndGggfHwgdW5jb3VudGFibGVzLmhhcyh0b2tlbikpIHtcbiAgICByZXR1cm4gd29yZDtcbiAgfVxuICBsZXQge1xuICAgIGxlbmd0aDogbGVuXG4gIH0gPSBydWxlcztcbiAgd2hpbGUgKGxlbi0tKSB7XG4gICAgY29uc3QgcnVsZSA9IHJ1bGVzW2xlbl07XG4gICAgaWYgKHJ1bGVbMF0udGVzdCh3b3JkKSkge1xuICAgICAgcmV0dXJuIHdvcmQucmVwbGFjZShydWxlWzBdLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgW21hdGNoLCBpbmRleF0gPSBhcmdzO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBydWxlWzFdLnJlcGxhY2UoL1xcJChcXGR7MSwyfSkvZywgKF8sIGluZGV4MikgPT4gYXJnc1tpbmRleDJdIHx8IFwiXCIpO1xuICAgICAgICBpZiAobWF0Y2ggPT09IFwiXCIpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdG9yZUNhc2Uod29yZFtpbmRleCAtIDFdLCByZXN1bHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN0b3JlQ2FzZShtYXRjaCwgcmVzdWx0KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gd29yZDtcbn07XG5jb25zdCBjb21wdXRlID0gKHdvcmQsIHJlcGxhY2VNYXAsIGtlZXBNYXAsIHJ1bGVzKSA9PiB7XG4gIGNvbnN0IHRva2VuID0gd29yZC50b0xvd2VyQ2FzZSgpO1xuICBpZiAoa2VlcE1hcC5oYXModG9rZW4pKSB7XG4gICAgcmV0dXJuIHJlc3RvcmVDYXNlKHdvcmQsIHRva2VuKTtcbiAgfVxuICBpZiAocmVwbGFjZU1hcC5oYXModG9rZW4pKSB7XG4gICAgcmV0dXJuIHJlc3RvcmVDYXNlKHdvcmQsIHJlcGxhY2VNYXAuZ2V0KHRva2VuKSk7XG4gIH1cbiAgcmV0dXJuIHNhbml0aXplV29yZCh0b2tlbiwgd29yZCwgcnVsZXMpO1xufTtcbmNvbnN0IG1hcEhhcyA9ICh3b3JkLCByZXBsYWNlTWFwLCBrZWVwTWFwLCBydWxlcykgPT4ge1xuICBjb25zdCB0b2tlbiA9IHdvcmQudG9Mb3dlckNhc2UoKTtcbiAgaWYgKGtlZXBNYXAuaGFzKHRva2VuKSkgcmV0dXJuIHRydWU7XG4gIGlmIChyZXBsYWNlTWFwLmhhcyh0b2tlbikpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIHNhbml0aXplV29yZCh0b2tlbiwgdG9rZW4sIHJ1bGVzKSA9PT0gdG9rZW47XG59O1xuY29uc3QgcGx1cmFsaXplID0gKHdvcmQsIGNvdW50LCBpbmNsdXNpdmUpID0+IHtcbiAgY29uc3QgcGx1cmFsaXplZCA9IGNvdW50ID09PSAxID8gcGx1cmFsaXplLnNpbmd1bGFyKHdvcmQpIDogcGx1cmFsaXplLnBsdXJhbCh3b3JkKTtcbiAgaWYgKGluY2x1c2l2ZSkgcmV0dXJuIFwiXCIuY29uY2F0KGNvdW50LCBcIiBcIikuY29uY2F0KHBsdXJhbGl6ZWQpO1xuICByZXR1cm4gcGx1cmFsaXplZDtcbn07XG5wbHVyYWxpemUucGx1cmFsID0gd29yZCA9PiBjb21wdXRlKHdvcmQsIGlycmVndWxhclNpbmdsZXMsIGlycmVndWxhclBsdXJhbHMsIHBsdXJhbFJ1bGVzKTtcbnBsdXJhbGl6ZS5zaW5ndWxhciA9IHdvcmQgPT4gY29tcHV0ZSh3b3JkLCBpcnJlZ3VsYXJQbHVyYWxzLCBpcnJlZ3VsYXJTaW5nbGVzLCBzaW5ndWxhclJ1bGVzKTtcbnBsdXJhbGl6ZS5hZGRQbHVyYWxSdWxlID0gKHJ1bGUsIHJlcGxhY2VtZW50KSA9PiB7XG4gIHBsdXJhbFJ1bGVzLnB1c2goW3Nhbml0aXplUnVsZShydWxlKSwgcmVwbGFjZW1lbnRdKTtcbn07XG5wbHVyYWxpemUuYWRkU2luZ3VsYXJSdWxlID0gKHJ1bGUsIHJlcGxhY2VtZW50KSA9PiB7XG4gIHNpbmd1bGFyUnVsZXMucHVzaChbc2FuaXRpemVSdWxlKHJ1bGUpLCByZXBsYWNlbWVudF0pO1xufTtcbnBsdXJhbGl6ZS5hZGRJcnJlZ3VsYXJSdWxlID0gKHNpbmdsZSwgcGx1cmFsKSA9PiB7XG4gIGNvbnN0IF9wbHVyYWwgPSBwbHVyYWwudG9Mb3dlckNhc2UoKTtcbiAgY29uc3QgX3NpbmdsZSA9IHNpbmdsZS50b0xvd2VyQ2FzZSgpO1xuICBpcnJlZ3VsYXJTaW5nbGVzLnNldChfc2luZ2xlLCBfcGx1cmFsKTtcbiAgaXJyZWd1bGFyUGx1cmFscy5zZXQoX3BsdXJhbCwgX3NpbmdsZSk7XG59O1xucGx1cmFsaXplLmFkZFVuY291bnRhYmxlUnVsZSA9IHJ1bGUgPT4ge1xuICBpZiAodHlwZW9mIHJ1bGUgPT09IFwic3RyaW5nXCIpIHtcbiAgICB1bmNvdW50YWJsZXMuYWRkKHJ1bGUudG9Mb3dlckNhc2UoKSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHBsdXJhbGl6ZS5hZGRQbHVyYWxSdWxlKHJ1bGUsIFwiJDBcIik7XG4gIHBsdXJhbGl6ZS5hZGRTaW5ndWxhclJ1bGUocnVsZSwgXCIkMFwiKTtcbn07XG5wbHVyYWxpemUuaXNQbHVyYWwgPSB3b3JkID0+IG1hcEhhcyh3b3JkLCBpcnJlZ3VsYXJTaW5nbGVzLCBpcnJlZ3VsYXJQbHVyYWxzLCBwbHVyYWxSdWxlcyk7XG5wbHVyYWxpemUuaXNTaW5ndWxhciA9IHdvcmQgPT4gbWFwSGFzKHdvcmQsIGlycmVndWxhclBsdXJhbHMsIGlycmVndWxhclNpbmdsZXMsIHNpbmd1bGFyUnVsZXMpO1xuY29uc3QgZGVmYXVsdElycmVndWxhcnMgPSBbXG4vLyBQcm9ub3Vucy5cbltcIklcIiwgXCJ3ZVwiXSwgW1wibWVcIiwgXCJ1c1wiXSwgW1wiaGVcIiwgXCJ0aGV5XCJdLCBbXCJzaGVcIiwgXCJ0aGV5XCJdLCBbXCJ0aGVtXCIsIFwidGhlbVwiXSwgW1wibXlzZWxmXCIsIFwib3Vyc2VsdmVzXCJdLCBbXCJ5b3Vyc2VsZlwiLCBcInlvdXJzZWx2ZXNcIl0sIFtcIml0c2VsZlwiLCBcInRoZW1zZWx2ZXNcIl0sIFtcImhlcnNlbGZcIiwgXCJ0aGVtc2VsdmVzXCJdLCBbXCJoaW1zZWxmXCIsIFwidGhlbXNlbHZlc1wiXSwgW1widGhlbXNlbGZcIiwgXCJ0aGVtc2VsdmVzXCJdLCBbXCJpc1wiLCBcImFyZVwiXSwgW1wid2FzXCIsIFwid2VyZVwiXSwgW1wiaGFzXCIsIFwiaGF2ZVwiXSwgW1widGhpc1wiLCBcInRoZXNlXCJdLCBbXCJ0aGF0XCIsIFwidGhvc2VcIl0sIFtcIm15XCIsIFwib3VyXCJdLCBbXCJpdHNcIiwgXCJ0aGVpclwiXSwgW1wiaGlzXCIsIFwidGhlaXJcIl0sIFtcImhlclwiLCBcInRoZWlyXCJdLFxuLy8gV29yZHMgZW5kaW5nIGluIHdpdGggYSBjb25zb25hbnQgYW5kIGBvYC5cbltcImVjaG9cIiwgXCJlY2hvZXNcIl0sIFtcImRpbmdvXCIsIFwiZGluZ29lc1wiXSwgW1widm9sY2Fub1wiLCBcInZvbGNhbm9lc1wiXSwgW1widG9ybmFkb1wiLCBcInRvcm5hZG9lc1wiXSwgW1widG9ycGVkb1wiLCBcInRvcnBlZG9lc1wiXSxcbi8vIEVuZHMgd2l0aCBgdXNgLlxuW1wiZ2VudXNcIiwgXCJnZW5lcmFcIl0sIFtcInZpc2N1c1wiLCBcInZpc2NlcmFcIl0sXG4vLyBFbmRzIHdpdGggYG1hYC5cbltcInN0aWdtYVwiLCBcInN0aWdtYXRhXCJdLCBbXCJzdG9tYVwiLCBcInN0b21hdGFcIl0sIFtcImRvZ21hXCIsIFwiZG9nbWF0YVwiXSwgW1wibGVtbWFcIiwgXCJsZW1tYXRhXCJdLCBbXCJzY2hlbWFcIiwgXCJzY2hlbWF0YVwiXSwgW1wiYW5hdGhlbWFcIiwgXCJhbmF0aGVtYXRhXCJdLFxuLy8gT3RoZXIgaXJyZWd1bGFyIHJ1bGVzLlxuW1wib3hcIiwgXCJveGVuXCJdLCBbXCJheGVcIiwgXCJheGVzXCJdLCBbXCJkaWVcIiwgXCJkaWNlXCJdLCBbXCJ5ZXNcIiwgXCJ5ZXNlc1wiXSwgW1wiZm9vdFwiLCBcImZlZXRcIl0sIFtcImVhdmVcIiwgXCJlYXZlc1wiXSwgW1wiZ29vc2VcIiwgXCJnZWVzZVwiXSwgW1widG9vdGhcIiwgXCJ0ZWV0aFwiXSwgW1wicXVpelwiLCBcInF1aXp6ZXNcIl0sIFtcImh1bWFuXCIsIFwiaHVtYW5zXCJdLCBbXCJwcm9vZlwiLCBcInByb29mc1wiXSwgW1wiY2FydmVcIiwgXCJjYXJ2ZXNcIl0sIFtcInZhbHZlXCIsIFwidmFsdmVzXCJdLCBbXCJsb29leVwiLCBcImxvb2llc1wiXSwgW1widGhpZWZcIiwgXCJ0aGlldmVzXCJdLCBbXCJncm9vdmVcIiwgXCJncm9vdmVzXCJdLCBbXCJwaWNrYXhlXCIsIFwicGlja2F4ZXNcIl0sIFtcInBhc3NlcmJ5XCIsIFwicGFzc2Vyc2J5XCJdLCBbXCJjYW52YXNcIiwgXCJjYW52YXNlc1wiXV07XG5jb25zdCBkZWZhdWx0UGx1cmFscyA9IFtbL3M/JC9pLCBcInNcIl0sIFsvW15cXHUwMDAwLVxcdTAwN0ZdJC9pLCBcIiQwXCJdLCBbLyhbXmFlaW91XWVzZSkkL2ksIFwiJDFcIl0sIFsvKGF4fHRlc3QpaXMkL2ksIFwiJDFlc1wiXSwgWy8oYWxpYXN8W15hb3VddXN8dFtsbV1hc3xnYXN8cmlzKSQvaSwgXCIkMWVzXCJdLCBbLyhlW21uXXUpcz8kL2ksIFwiJDFzXCJdLCBbLyhbXmxdaWFzfFthZWlvdV1sYXN8W2VqenJdYXN8W2l1XWFtKSQvaSwgXCIkMVwiXSwgWy8oYWx1bW58c3lsbGFifHZpcnxyYWRpfG51Y2xlfGZ1bmd8Y2FjdHxzdGltdWx8dGVybWlufGJhY2lsbHxmb2N8dXRlcnxsb2N8c3RyYXQpKD86dXN8aSkkL2ksIFwiJDFpXCJdLCBbLyhhbHVtbnxhbGd8dmVydGVicikoPzphfGFlKSQvaSwgXCIkMWFlXCJdLCBbLyhzZXJhcGh8Y2hlcnViKSg/OmltKT8kL2ksIFwiJDFpbVwiXSwgWy8oaGVyfGF0fGdyKW8kL2ksIFwiJDFvZXNcIl0sIFsvKGFnZW5kfGFkZGVuZHxtaWxsZW5uaXxkYXR8ZXh0cmVtfGJhY3Rlcml8ZGVzaWRlcmF0fHN0cmF0fGNhbmRlbGFicnxlcnJhdHxvdnxzeW1wb3NpfGN1cnJpY3VsfGF1dG9tYXR8cXVvcikoPzphfHVtKSQvaSwgXCIkMWFcIl0sIFsvKGFwaGVsaXxoeXBlcmJhdHxwZXJpaGVsaXxhc3luZGV0fG5vdW1lbnxwaGVub21lbnxjcml0ZXJpfG9yZ2FufHByb2xlZ29tZW58aGVkcnxhdXRvbWF0KSg/OmF8b24pJC9pLCBcIiQxYVwiXSwgWy9zaXMkL2ksIFwic2VzXCJdLCBbLyg/Oihrbml8d2l8bGkpZmV8KGFyfGx8ZWF8ZW98b2F8aG9vKWYpJC9pLCBcIiQxJDJ2ZXNcIl0sIFsvKFteYWVpb3V5XXxxdSl5JC9pLCBcIiQxaWVzXCJdLCBbLyhbXmNoXVtpZW9dW2xuXSlleSQvaSwgXCIkMWllc1wiXSwgWy8oeHxjaHxzc3xzaHx6eikkL2ksIFwiJDFlc1wiXSwgWy8obWF0cnxjb2R8bXVyfHNpbHx2ZXJ0fGluZHxhcHBlbmQpKD86aXh8ZXgpJC9pLCBcIiQxaWNlc1wiXSwgWy9cXGIoKD86dGl0KT9tfGwpKD86aWNlfG91c2UpJC9pLCBcIiQxaWNlXCJdLCBbLyhwZSkoPzpyc29ufG9wbGUpJC9pLCBcIiQxb3BsZVwiXSwgWy8oY2hpbGQpKD86cmVuKT8kL2ksIFwiJDFyZW5cIl0sIFsvZWF1eCQvaSwgXCIkMFwiXSwgWy9tW2FlXW4kL2ksIFwibWVuXCJdLCBbXCJ0aG91XCIsIFwieW91XCJdXTtcbmNvbnN0IGRlZmF1bHRTaW5nbGVzID0gW1svcyQvaSwgXCJcIl0sIFsvKHNzKSQvaSwgXCIkMVwiXSwgWy8od2l8a25pfCg/OmFmdGVyfGhhbGZ8aGlnaHxsb3d8bWlkfG5vbnxuaWdodHxbXlxcd118XilsaSl2ZXMkL2ksIFwiJDFmZVwiXSwgWy8oYXJ8KD86d298W2FlXSlsfFtlb11bYW9dKXZlcyQvaSwgXCIkMWZcIl0sIFsvaWVzJC9pLCBcInlcIl0sIFsvKGRnfHNzfG9pc3xsa3xva3x3bnxtYnx0aHxjaHxlY3xvYWx8aXN8Y2t8aXh8c3Nlcnx0c3x3YilpZXMkL2ksIFwiJDFpZVwiXSwgWy9cXGIobHwoPzpuZWNrfGNyb3NzfGhvZ3xhdW4pP3R8Y29sbHxmYWVyfGZvb2R8Z2VufGdvb258Z3JvdXB8aGlwcHxqdW5rfHZlZ2d8KD86cG9yayk/cHxjaGFybHxjYWxvcnxjdXQpaWVzJC9pLCBcIiQxaWVcIl0sIFsvXFxiKG1vbnxzbWlsKWllcyQvaSwgXCIkMWV5XCJdLCBbL1xcYigoPzp0aXQpP218bClpY2UkL2ksIFwiJDFvdXNlXCJdLCBbLyhzZXJhcGh8Y2hlcnViKWltJC9pLCBcIiQxXCJdLCBbLyh4fGNofHNzfHNofHp6fHR0b3xnb3xjaG98YWxpYXN8W15hb3VddXN8dFtsbV1hc3xnYXN8KD86aGVyfGF0fGdyKW98W2FlaW91XXJpcykoPzplcyk/JC9pLCBcIiQxXCJdLCBbLyhhbmFseXxkaWFnbm98cGFyZW50aGV8cHJvZ25vfHN5bm9wfHRoZXxlbXBoYXxjcml8bmUpKD86c2lzfHNlcykkL2ksIFwiJDFzaXNcIl0sIFsvKG1vdmllfHR3ZWx2ZXxhYnVzZXxlW21uXXUpcyQvaSwgXCIkMVwiXSwgWy8odGVzdCkoPzppc3xlcykkL2ksIFwiJDFpc1wiXSwgWy8oYWx1bW58c3lsbGFifHZpcnxyYWRpfG51Y2xlfGZ1bmd8Y2FjdHxzdGltdWx8dGVybWlufGJhY2lsbHxmb2N8dXRlcnxsb2N8c3RyYXQpKD86dXN8aSkkL2ksIFwiJDF1c1wiXSwgWy8oYWdlbmR8YWRkZW5kfG1pbGxlbm5pfGRhdHxleHRyZW18YmFjdGVyaXxkZXNpZGVyYXR8c3RyYXR8Y2FuZGVsYWJyfGVycmF0fG92fHN5bXBvc2l8Y3VycmljdWx8cXVvcilhJC9pLCBcIiQxdW1cIl0sIFsvKGFwaGVsaXxoeXBlcmJhdHxwZXJpaGVsaXxhc3luZGV0fG5vdW1lbnxwaGVub21lbnxjcml0ZXJpfG9yZ2FufHByb2xlZ29tZW58aGVkcnxhdXRvbWF0KWEkL2ksIFwiJDFvblwiXSwgWy8oYWx1bW58YWxnfHZlcnRlYnIpYWUkL2ksIFwiJDFhXCJdLCBbLyhjb2R8bXVyfHNpbHx2ZXJ0fGluZClpY2VzJC9pLCBcIiQxZXhcIl0sIFsvKG1hdHJ8YXBwZW5kKWljZXMkL2ksIFwiJDFpeFwiXSwgWy8ocGUpKHJzb258b3BsZSkkL2ksIFwiJDFyc29uXCJdLCBbLyhjaGlsZClyZW4kL2ksIFwiJDFcIl0sIFsvKGVhdSl4PyQvaSwgXCIkMVwiXSwgWy9tZW4kL2ksIFwibWFuXCJdXTtcbmNvbnN0IGRlZmF1bHRVbmNvdW50YWJsZXMgPSBbXG4vLyBTaW5ndWxhciB3b3JkcyB3aXRoIG5vIHBsdXJhbHMuXG5cImFkdWx0aG9vZFwiLCBcImFkdmljZVwiLCBcImFnZW5kYVwiLCBcImFpZFwiLCBcImFpcmNyYWZ0XCIsIFwiYWxjb2hvbFwiLCBcImFtbW9cIiwgXCJhbmFseXRpY3NcIiwgXCJhbmltZVwiLCBcImF0aGxldGljc1wiLCBcImF1ZGlvXCIsIFwiYmlzb25cIiwgXCJibG9vZFwiLCBcImJyZWFtXCIsIFwiYnVmZmFsb1wiLCBcImJ1dHRlclwiLCBcImNhcnBcIiwgXCJjYXNoXCIsIFwiY2hhc3Npc1wiLCBcImNoZXNzXCIsIFwiY2xvdGhpbmdcIiwgXCJjb2RcIiwgXCJjb21tZXJjZVwiLCBcImNvb3BlcmF0aW9uXCIsIFwiY29ycHNcIiwgXCJkZWJyaXNcIiwgXCJkaWFiZXRlc1wiLCBcImRpZ2VzdGlvblwiLCBcImVsa1wiLCBcImVuZXJneVwiLCBcImVxdWlwbWVudFwiLCBcImV4Y3JldGlvblwiLCBcImV4cGVydGlzZVwiLCBcImZpcm13YXJlXCIsIFwiZmxvdW5kZXJcIiwgXCJmdW5cIiwgXCJnYWxsb3dzXCIsIFwiZ2FyYmFnZVwiLCBcImdyYWZmaXRpXCIsIFwiaGFyZHdhcmVcIiwgXCJoZWFkcXVhcnRlcnNcIiwgXCJoZWFsdGhcIiwgXCJoZXJwZXNcIiwgXCJoaWdoamlua3NcIiwgXCJob21ld29ya1wiLCBcImhvdXNld29ya1wiLCBcImluZm9ybWF0aW9uXCIsIFwiamVhbnNcIiwgXCJqdXN0aWNlXCIsIFwia3Vkb3NcIiwgXCJsYWJvdXJcIiwgXCJsaXRlcmF0dXJlXCIsIFwibWFjaGluZXJ5XCIsIFwibWFja2VyZWxcIiwgXCJtYWlsXCIsIFwibWVkaWFcIiwgXCJtZXdzXCIsIFwibW9vc2VcIiwgXCJtdXNpY1wiLCBcIm11ZFwiLCBcIm1hbmdhXCIsIFwibmV3c1wiLCBcIm9ubHlcIiwgXCJwZXJzb25uZWxcIiwgXCJwaWtlXCIsIFwicGxhbmt0b25cIiwgXCJwbGllcnNcIiwgXCJwb2xpY2VcIiwgXCJwb2xsdXRpb25cIiwgXCJwcmVtaXNlc1wiLCBcInJhaW5cIiwgXCJyZXNlYXJjaFwiLCBcInJpY2VcIiwgXCJzYWxtb25cIiwgXCJzY2lzc29yc1wiLCBcInNlcmllc1wiLCBcInNld2FnZVwiLCBcInNoYW1ibGVzXCIsIFwic2hyaW1wXCIsIFwic29mdHdhcmVcIiwgXCJzdGFmZlwiLCBcInN3aW5lXCIsIFwidGVubmlzXCIsIFwidHJhZmZpY1wiLCBcInRyYW5zcG9ydGF0aW9uXCIsIFwidHJvdXRcIiwgXCJ0dW5hXCIsIFwid2VhbHRoXCIsIFwid2VsZmFyZVwiLCBcIndoaXRpbmdcIiwgXCJ3aWxkZWJlZXN0XCIsIFwid2lsZGxpZmVcIiwgXCJ5b3VcIiwgL3Bva1tlw6ldbW9uJC9pLFxuLy8gUmVnZXhlcy5cbi9bXmFlaW91XWVzZSQvaSxcbi8vIFwiY2hpbmVzZVwiLCBcImphcGFuZXNlXCJcbi9kZWVyJC9pLFxuLy8gXCJkZWVyXCIsIFwicmVpbmRlZXJcIlxuL2Zpc2gkL2ksXG4vLyBcImZpc2hcIiwgXCJibG93ZmlzaFwiLCBcImFuZ2VsZmlzaFwiXG4vbWVhc2xlcyQvaSwgL29baXVdcyQvaSxcbi8vIFwiY2Fybml2b3JvdXNcIlxuL3BveCQvaSxcbi8vIFwiY2hpY2twb3hcIiwgXCJzbWFsbHBveFwiXG4vc2hlZXAkL2ldO1xuZm9yIChjb25zdCBbc2luZ2xlLCBwbHVyYWxdIG9mIGRlZmF1bHRJcnJlZ3VsYXJzKSB7XG4gIHBsdXJhbGl6ZS5hZGRJcnJlZ3VsYXJSdWxlKHNpbmdsZSwgcGx1cmFsKTtcbn1cbmZvciAoY29uc3QgW3NlYXJjaCwgcmVwbGFjZW1lbnRdIG9mIGRlZmF1bHRQbHVyYWxzKSB7XG4gIHBsdXJhbGl6ZS5hZGRQbHVyYWxSdWxlKHNlYXJjaCwgcmVwbGFjZW1lbnQpO1xufVxuZm9yIChjb25zdCBbc2VhcmNoLCByZXBsYWNlbWVudF0gb2YgZGVmYXVsdFNpbmdsZXMpIHtcbiAgcGx1cmFsaXplLmFkZFNpbmd1bGFyUnVsZShzZWFyY2gsIHJlcGxhY2VtZW50KTtcbn1cbmZvciAoY29uc3Qgc2VhcmNoIG9mIGRlZmF1bHRVbmNvdW50YWJsZXMpIHtcbiAgcGx1cmFsaXplLmFkZFVuY291bnRhYmxlUnVsZShzZWFyY2gpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBwbHVyYWxpemU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5janMubWFwXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/pluralize-esm/dist/index.cjs\n");

/***/ })

};
;