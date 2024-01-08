const edit = (obj, grades) => {
  const newObj = obj;
  for (let i = 0; i < grades.length; i += 1) {
    if (newObj.id === grades[i].studentId) {
      newObj.grade = grades[i].grade;
      return newObj;
    }
  }
  newObj.grade = 'N/A';
  return newObj;
};

export default function updateStudentGradeByCity(list, city, grades) {
  const filtered = list.filter((obj) => obj.location === city);
  return filtered.map((obj) => edit(obj, grades));
}
