const fs = require('fs').promises;

async function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8')
      .then((db) => {
        const students = db.split('\n').filter((line) => line.trim() !== '');
        console.log(`Number of students: ${students.length - 1}`);
        const fields = {};
        students.slice(1).forEach((student) => {
          const field = student.split(',')[3];
          const name = student.split(',')[0];
          if (fields[field]) {
            fields[field].push(name);
          } else {
            fields[field] = [name];
          }
        });
        Object.keys(fields).forEach((key) => {
          console.log(`Number of students in ${key}: ${fields[key].length}. List: ${fields[key].join(', ')}`);
        });
        resolve();
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

module.exports = countStudents;
