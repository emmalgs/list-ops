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

  concat(...list) {
    for (let i = 0; i < list.length; i++) {
      const currentList = list[i];
      if (currentList.values[0] instanceof List) {
        this.concat(...currentList.values);
      } else {
        const newList = [...this.values, ...currentList.values];
        this.values = newList;
      }
    }
    return this;
  }

  filter(condition) {
    const filteredList = [];
    for (let i = 0; i < this.values.length; i++) {
      const currentElement = this.values[i];
      if (condition(currentElement)) {
        filteredList.push(currentElement);
      }
    }
    return new List(filteredList);
  }

  map(callback) {
    const mappedList = [];
    for (let i = 0; i < this.values.length; i++) {
      const currentElement = this.values[i];
      mappedList.push(callback(currentElement))
    }
    return new List(mappedList)
  }

  length() {
    return this.values.length;
  }

  foldl(reducer, initialValue = 0) {
    let acc = initialValue
    for (let i = 0; i < this.values.length; i++) {
      const currentElement = this.values[i];
      acc = reducer(acc, currentElement);
    }
    return acc;
  }

  foldr() {
    throw new Error("Remove this statement and implement this function");
  }

  reverse() {
    throw new Error("Remove this statement and implement this function");
  }
}
