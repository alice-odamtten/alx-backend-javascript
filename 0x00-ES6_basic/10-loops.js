export default function appendToEachArrayValue(array, appendString) {
  const arraydup = [];
  for (const value of array) {
    arraydup.push(appendString + value);
  }

  return arraydup;
}
