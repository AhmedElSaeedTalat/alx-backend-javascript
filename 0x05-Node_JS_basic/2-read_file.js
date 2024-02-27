const fs = require('fs');

// function to parse csv file manually
const parse = (file) => {
  let list = file.split('\n');
  const newList = [];
  let dict = {};
  let head;
  let row;
  for (let i = 0; i < list.length; i += 1) {
    if (i === 0) {
      head = list[0].split(',');
    } else {
      row = list[i].split(',');
      if (list[i]) {
        for (let j = 0; j < head.length; j += 1) {
          dict[head[j]] = row[j];
        }
        newList.push(dict);
        dict = {};
      }
    }
  }
  list = [];
  return newList;
};

//  function to count student
//  enrolled in each filed
const countFields = (list) => {
  const dict = {};
  for (let i = 0; i < list.length; i += 1) {
    const { field } = list[i];
    if (field) {
      if (dict[field]) {
        dict[field].push(list[i].firstname);
      } else {
        dict[field] = [];
        dict[field].push(list[i].firstname);
      }
    }
  }
  for (const [key, value] of Object.entries(dict)) {
    console.log(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`);
  }
};

const countStudents = (path) => {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }
  const file = fs.readFileSync(path, 'utf-8');
  const parsedList = parse(file);
  const count = parsedList.length;
  console.log(`Number of students: ${count}`);
  countFields(parsedList);
};

module.exports = countStudents;
