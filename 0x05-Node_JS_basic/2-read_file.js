const fs = require('fs');
const csv = require('csv-parser');

const countStudents = (path) => {
  fs.access(path, fs.constants.F_OK, (err) => {
    if (err) {
      throw new Error('Cannot load the database');
    }
  });
  const results = [];
  fs.createReadStream(path).pipe(csv()).on('data', (data) => {
    results.push(data);
  }).on('end', () => {
    let count = 0;
    const dict = {};
    for (let i = 0; i < results.length; i += 1) {
      const { field } = results[i];
      if (field) {
        count += 1;
        if (dict[field]) {
          dict[field].push(results[i].firstname);
        } else {
          dict[field] = [];
          dict[field].push(results[i].firstname);
        }
      }
    }
    console.log(`Number of students: ${count}`);
    for (const [key, value] of Object.entries(dict)) {
      console.log(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`);
    }
  });
};

module.exports = countStudents;
