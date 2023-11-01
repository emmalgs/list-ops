//
// This is only a SKELETON file for the 'List Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(values = []) {
    this.values = values;
  }

  append(list) {
      const appendedList = [...this.values, ...list.values];
      return new List(appendedList);
  }

  concat() {
    throw new Error("Remove this statement and implement this function");
  }

  filter() {
    throw new Error("Remove this statement and implement this function");
  }

  map() {
    throw new Error("Remove this statement and implement this function");
  }

  length() {
    throw new Error("Remove this statement and implement this function");
  }

  foldl() {
    throw new Error("Remove this statement and implement this function");
  }

  foldr() {
    throw new Error("Remove this statement and implement this function");
  }

  reverse() {
    throw new Error("Remove this statement and implement this function");
  }
}
