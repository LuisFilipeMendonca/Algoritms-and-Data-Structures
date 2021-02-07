const PRIME = 31;

function hash(key, length) {
  let total = 0;
  let value;

  for (let i = 0; i < Math.min(key.length, 100); i++) {
    value = key[i].charCodeAt() - 96;
    total = (total * PRIME + value) % length;
  }

  return total;
}

// ============================================
// BIG O
//
// Insertion => O(1) => O(n) with the world's worst hash function (bad distrubution)
// Deletion => O(1) => O(n) with the world's worst hash function (bad distrubution)
// Access => O(1) => O(n) with the world's worst hash function (bad distrubution)
// ============================================

class HashTable {
  constructor(size = 11) {
    this.keyMap = new Array(size);
    this.prime = 31;
  }

  _hash(key) {
    let total = 0;
    let value;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      value = key[i].charCodeAt() - 96;
      total = (total * this.prime + value) % this.keyMap.length;
    }

    return total;
  }

  set(key, value) {
    const hashedIdx = this._hash(key);

    if (!this.keyMap[hashedIdx]) {
      this.keyMap[hashedIdx] = [];
    }

    this.keyMap[hashedIdx].push([key, value]);
  }

  get(key) {
    const hashedIdx = this._hash(key);
    let foundValue = this.keyMap[hashedIdx];

    if (this.keyMap[hashedIdx] === undefined) return undefined;

    if (foundValue.length > 1) {
      foundValue = foundValue.find((value) => value[0] === key);
    }

    return foundValue[1];
  }

  values() {
    const values = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          values.push(this.keyMap[i][j][1]);
        }
      }
    }

    return [...new Set(values)];
  }

  keys() {
    const keys = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          keys.push(this.keyMap[i][j][0]);
        }
      }
    }

    return [...new Set(keys)];
  }
}

const hashTable = new HashTable();
hashTable.set("white", "#fff");
hashTable.set("black", "#000");
hashTable.set("yellow", "#ffff00");
hashTable.set("orangered", "#ff3300");
hashTable.set("blue", "#0000ff");
hashTable.set("red", "#ff0000");
hashTable.set("cyan", "#00e6e6");
hashTable.set("purple", "#cc66ff");
hashTable.set("green", "#00ff00");
hashTable.set("silver", "#d9d9d9");
hashTable.set("gray", "#808080");
hashTable.set("white", "#fff");
console.log(hashTable.keys());
console.log(hashTable.values());
