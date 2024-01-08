export default function cleanSet(set, startString) {
  const list = [];
  if (startString === '') {
    return '';
  }
  set.forEach((str) => {
    if (str.startsWith(startString)) {
      list.push(str.slice(startString.length));
    }
  });
  return list.join('-');
}
