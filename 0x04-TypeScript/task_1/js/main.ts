interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
  }

interface Directors extends Teacher {
  numberOfReports: number;
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
interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
  const firstLetter = firstName.charAt(0).toUpperCase();
  const fullName = `${firstLetter}. ${lastName}`;
  return fullName;
};
