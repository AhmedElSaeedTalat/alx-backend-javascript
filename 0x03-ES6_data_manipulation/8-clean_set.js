export default function cleanSet(set, startString) {
  const list = [];
  if (!startString || !set || typeof startString !== 'string') {
    return '';
  }
  set.forEach((str) => {
    if (str.startsWith(startString)) {
      list.push(str.slice(startString.length));
    }
  });
  return list.join('-');
}
