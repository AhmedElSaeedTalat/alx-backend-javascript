import readDatabase from '../utils';

const db = process.argv[2] ? process.argv[2] : '';
class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const obj = await readDatabase(db);
      const statement = ['This is the list of our students'];
      for (const [key, value] of Object.entries(obj)) {
        statement.push(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`);
      }
      res.status(200).send(statement.join('\n'));
    } catch (err) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    const majors = ['CS', 'SWE'];
    if (!majors.includes(major)) {
      res.status(500).send('Major parameter must be CS or SWE');
    } else {
      try {
        const obj = await readDatabase(db);
        for (const [key, value] of Object.entries(obj)) {
          if (major === key) {
            res.status(200).send(`List: ${value.join(', ')}`);
          }
        }
      } catch (err) {
        res.status(500).send('Cannot load the database');
      }
    }
  }
}
export default StudentsController;
