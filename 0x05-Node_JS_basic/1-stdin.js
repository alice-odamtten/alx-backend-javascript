/**
 * function that will be executed through command line
 */

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.setEncoding('utf8');

process.stdin.on('data', (data) => {
  const name = data.trim();
  if (name) {
    console.log('Your name is:', name);
  }
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
