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

interface StudentConstructor {
  new (firstName: string, lastName: string) : StudentInterface;
}

interface StudentInterface {
  workOnHomework() : string;
  displayName() : string;
}

class StudentClass implements StudentInterface{
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
	this.lastName = lastName;
  }

  workOnHomework() : string {
    return 'Currently working';
  }

  displayName() :string {
    return this.firstName;
  }
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
