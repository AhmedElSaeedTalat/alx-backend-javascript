export default function iterateThroughObject(reportWithIterator) {
  const array = [];
  for (const item of reportWithIterator) {
    array.push(item);
  }
  return array.join(' | ');
}
