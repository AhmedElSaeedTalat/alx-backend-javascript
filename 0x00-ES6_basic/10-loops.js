export default function appendToEachArrayValue(array, appendString) {
  for (const item of array) {
    array[array.indexOf(item)] = appendString + item;
  }

  return array;
}
