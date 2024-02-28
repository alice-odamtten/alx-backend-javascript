/**
 * read fromthe csv file
 */
const fs = require('fs').promises;

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8')
      .then((data) => {
        const lines = data.split('\n').filter((line) => line.trim() !== '');
        console.log(`Number of students: ${lines.length - 1}`);
        const cs = [];
        const swe = [];

        for (const line of lines) {
          const fields = line.split(',');
          const name = fields[0];
          const field = fields[3].trim();
          if (field === 'CS') {
            cs.push(name);
          } else if (field === 'SWE') {
            swe.push(name);
          }
        }
        console.log(`Number of students in CS: ${cs.length}. List: ${cs.join(', ')}`);
        console.log(`Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}`);
        resolve(); // Resolve the Promise after processing data
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

module.exports = countStudents;
