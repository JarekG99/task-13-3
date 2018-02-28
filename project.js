//project.js



process.stdin.setEncoding('utf-8');

var readline = require('readline');

var rl = readline.createInterface(process.stdin, process.stdout);

rl.question("What would you like to say?  ", function(answer) {

 console.log('Node version: ' + process.version);
 console.log ('Run on: '  + process.env.TERM_PROGRAM);

  var input = answer;
  if(input !== null) {
    //jak jest cos na wejsciu można wyswietlac
    var instruction = input.toString().trim();
    switch(instruction) {
            case '/exit':
                console.log('Quitting app!');
                process.exit();
                break;
            case '/sayhello':
                process.stdout.write(' Hello!\n Quitting app!\n');
                process.exit();
                break;

            default:
                process.stderr.write('Wrong instruction!\n');
        }
      }
    process.stdout.write("Pls write exit if you want to leave.\n");

          });
    rl.on('line', function(saying) {
      if(saying.toLowerCase().trim() === 'exit') {
        rl.close();
      } else {
        console.log('Pls write exit if you want to leave.');
      }
    });
