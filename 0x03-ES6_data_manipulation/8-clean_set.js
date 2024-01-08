export default function cleanSet(set, startString) {
  const list = [];
  if (!startString || !set || typeof startString !== 'string') {
    return '';
  }
  set.forEach((str) => {
    if (str.startsWith(startString)) {
      const sbtr = str.slice(startString.length);
      if (sbtr && sbtr !== startString) {
        list.push(sbtr);
      }
    }
  });
  return list.join('-');
}
