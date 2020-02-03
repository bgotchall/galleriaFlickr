
var Flickr = require("flickr-sdk");

/**
 * This example demonstrates how to use public REST API methods:
 * https://www.flickr.com/services/api/
 * https://www.flickr.com/services/api/flickr.photos.getInfo.html
 */

// create a new Flickr API client. since we're requesting a
// resource that doesn't require user authentication, we can
// just use our API key.

var flickr = new Flickr(process.env.FLICKR_API_KEY);

// call the flickr.photos.getInfo API method and request photo data!
console.log(flickr);

// flickr.photos.getInfo({
// 	photo_id: 72157712929505937
// }).then(function (res) {
// 	console.log('yay!', res.body);
// }).catch(function (err) {
// 	console.error('bonk', err);
// });