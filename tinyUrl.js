/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */

var assignUrl = function() {
    var url = "http://tinyurl.com/";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 6; i++) {
        url += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return url;
}

var database = {};

var encode = function(longUrl) {
    var shortUrl = assignUrl();
    database[shortUrl] = longUrl;
    return shortUrl;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    if (typeof database[shortUrl] !== 'undefined') {
        return database[shortUrl];
    }
};
