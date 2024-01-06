export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = (typeof value !== 'string')
      ? (() => { throw new TypeError('Name must be a string'); })() : value;
  }

  get length() {
    return this._length;
  }

  set length(value) {
    this._length = (typeof value !== 'number')
      ? (() => { throw new TypeError('Length must be a number'); })() : value;
  }

  get students() {
    return this._students;
  }

  set students(value) {
    this._students = (!Array.isArray(value) || !value.every((item) => typeof item === 'string'))
      ? (() => { throw new TypeError('Student must be an array of strings'); })() : value;
  }
}
