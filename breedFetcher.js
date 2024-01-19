const request = require('request');
const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const fetchBreedDescription = function(breedName, callback) {

  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, body) => {
  // console.log(body);
  // console.log(typeof body);

    if (error) {
      callback(`Failed to request details: ${error}`,null);
    }

    const data = JSON.parse(body);
    // console.log(data);

    const breed = data[0];
    if (breed) {
      callback(null,breed.description);
    } else {
      callback(`Failed to find breed ${breedName}`,null);
    }
  });

};

module.exports = { fetchBreedDescription };

// rl.question("Enter breed", (breed) => {
//   // rl.question("Save to: ", (destPath) => {
//     fetchBreedDescription(pageUrl/*, destPath*/);
//   });
// //;