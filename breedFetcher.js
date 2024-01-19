const request = require('request');
const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const breedFetcher = (url, /*dest*/) => {
  request(url, (error, response, body) => {
    if (error) {
      console.log('error', error)
      rl.close();
    }
    const data = JSON.parse(body);
    console.log(data);
    console.log(typeof data);
    // fs.access(dest, fs.F_OK, (err) => {
    //   if (err) {
    //     fs.writeFile(dest, body, (err) => {
    //       if (err) {
    //         console.error(err);
    //       };
    //       console.log(`Downloaded and saved to ${dest}`);
    //     });
    //     rl.close();
    //   }
    // });
  });
};

rl.question("Enter URL: ", (pageUrl) => {
  // rl.question("Save to: ", (destPath) => {
    breedFetcher(pageUrl/*, destPath*/);
  });
//;