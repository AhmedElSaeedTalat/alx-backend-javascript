const http = require('http');

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

const app = http.createServer(async (req, res) => {
  let list;
  res.setHeader('Content-Type', 'text/plain');
  res.statusCode = 200;
  if (req.url === '/') {
    res.write('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
      list = await countStudents(db);
      res.write('This is the list of our students\n');
      res.write(list.join('\n'));
    } catch (err) {
      res.write(err.toString());
    }
  }
  res.end();
}).listen(1245);
module.exports = app;
