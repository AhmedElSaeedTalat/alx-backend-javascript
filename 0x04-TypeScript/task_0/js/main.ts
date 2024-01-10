interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
}
const firstStudent: Student = {
  firstName: 'Jose',
  lastName: 'Maria',
  age: 18,
  location: 'Spain',
} 
const secondStudent: Student = {
  firstName: 'Maria',
  lastName: 'Backer',
  age: 19,
  location: 'Germany',
}
const studentsList: Student[] = [firstStudent, secondStudent];
const table = document.createElement('table');
for (const student of studentsList) {
  const row = document.createElement('tr');
  const firstCell = document.createElement('td');
  firstCell.textContent = student.firstName;
  const secondCell = document.createElement('td');
  secondCell.textContent = student.location;
  row.appendChild(firstCell);
  row.appendChild(secondCell);
  table.appendChild(row);
}
