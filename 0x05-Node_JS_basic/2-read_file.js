/**
 * read fromthe csv file
 */
const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8').split('\n').filter((line) => line.trim() !== '');
    console.log(`Number of students: ${data.length - 1}`);
    const cs = [];
    const swe = [];

    for (const line of data) {
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
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
