# RegExp.escape

**RegExp.escape** returns a string with escaped regular expression characters for use within a regular expression.

## Usage

```js
var strName = 'Dr. Doogie Howser, M.D.';

var escName = RegExp.escape(strName); // Dr\. Doogie Howser, M\.D\.

var regName = new RegExp('\\b' + escName + '\\b'); // /\bDr\. Doogie Howser, M\.D\.\b/
```

## Browser compatibility

All modern browsers are supported, including:

- Chrome
- Internet Explorer
- Firefox
- Opera
- Safari

- Android 2.2+
- Blackberry 7+
- iOS Safari 4+

## Prollyfill status

If you would like to see **RegExp.escape** in a JavaScript standard, subscribe to the [ECMAScript List] and request to have it added it to an [ECMA Specification].

This project was inspired by [Stuart P. Bentley]’s [Specifiction Topic]. After reading it, I decided to throw this together.

---

RegExp.escape.js is [323B](/RegExp.escape.js) or [107B](/RegExp.escape.min.js) minified and gzipped.

[ECMAScript List]: https://mail.mozilla.org/listinfo/es-discuss
[Specifiction Topic]: http://discourse.specifiction.org/t/regexp-escape-str/832
[Anne van Kesteren]: https://twitter.com/annevk
[Stuart P. Bentley]: https://twitter.com/stuartpb
[ES6 Draft]: http://wiki.ecmascript.org/doku.php?id=harmony:specification_drafts
