//Dependencies

// adds code to read and set the environment variables with the dotenv package:
require("dotenv").config();

//import twitter npm package
var twitter = require("twitter");

//imports the node spotify npm package
var spotify = require("node-spotify-api");

//imports the api keys
var keys = require("./keys");

//imports the request npm package.
var request = require("request");

// Import the FS package for read/write.
var fs = require("fs");

// Start up the spotify API client using our client id and secret
var spotify = new Spotify(keys.spotify);
