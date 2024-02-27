const express = require('express');

const app = express();

const PORT = 1245;

const fs = require('fs').promises;

const db = process.argv[2] ? process.argv[2] : '';
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
const countFields = (list, resultList) => {
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
    resultList.push(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`);
  }
  return resultList;
};

const countStudents = async (path) => {
  try {
    const file = await fs.readFile(path, 'utf-8');
    const parsedList = parse(file);
    const count = parsedList.length;
    let list = [];
    list.push(`Number of students: ${count}`);
    list = countFields(parsedList, list);
    return list;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.status(200);
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  let list;
  res.set('Content-Type', 'text/plain');
  try {
    list = await countStudents(db);
    const response = `This is the list of our students\n${list.join('\n')}`;
    res.send(response);
  } catch (err) {
    res.send('Cannot load the database');
  }
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
});

module.exports = app;
