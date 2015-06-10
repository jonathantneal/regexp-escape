(function () {
	// cache escapable characters RegExp
	var rEscapableCharacters = /[-\/\\^$*+?.()|[\]{}]/g;

	// cache escape + match String
	var sEscapeMatch = '\\$&';

	// RegExp.escape
	RegExp.escape = function escape(string) {
		return String(string).replace(rEscapableCharacters, sEscapeMatch);
	};
})();
