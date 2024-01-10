interface Teacher {
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?:number,
  location: string,
  [index:string]: any,
}

interface Directors extends Teacher {
  numberOfReports: number,
}

function printTeacher(firstName: string, lastName: string) : string{
  return `${firstName[0]}. ${lastName}`;
} 

interface printTeacherFunction {
  (firstName: string, lastName: string) : string,
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);
