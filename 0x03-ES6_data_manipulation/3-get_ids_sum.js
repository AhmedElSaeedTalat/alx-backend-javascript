export default function getStudentIdsSum(list) {
  return list.reduce((accumulator, curr) => accumulator + curr.id, 0);
}
