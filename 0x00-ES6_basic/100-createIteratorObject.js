export default function createIteratorObject(report) {
  const employees = Object.values(report.allEmployees);
  const employeesName = [];
  let index = -1;
  employees.map((employee) => employeesName.push(...employee));
  const len = employeesName.length;
  return {
    next() {
      index += 1;
      if (index < len) {
        return { value: employeesName[index], done: false };
      }
      return { value: undefined, done: true };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}
