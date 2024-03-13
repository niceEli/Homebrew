const {exec} = require('child_process');

process.chdir("./node_modules/kaboom");
console.log("Building kaboom...\n");
exec("npm i", (err, stdout, stderr) => {
  if (err) {
    console.error(err);
  }
  console.log(stdout);
  console.error(stderr);
});
process.chdir("../..");
