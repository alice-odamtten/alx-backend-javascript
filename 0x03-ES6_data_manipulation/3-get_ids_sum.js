export default function getStudentIdsSum(getListStudents) {
  return getListStudents.reduce((total, item) => total + item.id, 0);
}
