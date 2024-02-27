const fs = require('fs').promises;

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
  return dict;
};

const readDatabase = async (path) => {
  try {
    const file = await fs.readFile(path, 'utf-8');
    const parsedList = parse(file);
    let dict = {};
    dict = countFields(parsedList);
    return dict;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};
module.exports = readDatabase;
