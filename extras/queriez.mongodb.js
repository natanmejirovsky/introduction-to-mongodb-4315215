/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use("cooker")

//db.recipes.find({}, {}).sort({ "rating_avg": -1 }).limit(4);
//db.recipes.find({ "tags": { $all: ["mexican"] } }, { "rating_avg": 1, "tags": 1 }).sort({ "rating_avg": -1 }).limit(4);
db.recipes.find({ "likes": { $all: [1] } }, { "likes": 1, "title": 1 }).sort({ "title": 1 });
db.recipes.find({ "likes": { $in: [1, 35] } }, { "likes": 1, "title": 1 }).sort({ "title": 1 });