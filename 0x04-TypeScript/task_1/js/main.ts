interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
  }


function createTeacher(
  firstName: string,
  lastName: string,
  fullTimeEmployee: boolean,
  location: string,
  additionalAttributes?: { [key: string]: any }
): Teacher {
  const teacher: Teacher = {
    firstName,
    lastName,
    fullTimeEmployee,
    location,
    ...additionalAttributes
  };

  Object.freeze(teacher); 

  return teacher;
}

const teacher1: Teacher = createTeacher("John", "Doe", true, "City A", { yearsOfExperience: 5, contract: true });
const teacher2: Teacher = createTeacher("Jane", "Smith", false, "City B", { contract: false });

console.log(teacher1);
console.log(teacher2);

