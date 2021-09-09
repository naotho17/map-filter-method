// mapやfilterを使った配列の処理

const nameArr = ["田中", "山田", "なおちょ"];

//従来はこうゆう感じで書いてたが...
for (let i = 0; i < nameArr.length; i++) {
  console.log(`${i}番目は${nameArr[i]}です`);
}

// mapを使うと....
//引数nameのとこに順番に配列の値が入ってくる
const mapArr = nameArr.map((name) => {
  return name;
});
console.log(mapArr);

nameArr.map((name) => console.log(name));

// filterメソッド
//奇数だけ取り出したりするのに便利

const numArr = [1, 2, 3, 4, 5];

const newNumArr = numArr.filter((num) => {
  return num % 2 === 1;
});

console.log(newNumArr);

// なおちょ以外はさん付けで表示したいときはこんな感じ

const newNameArr = nameArr.map((name) => {
  if (name === "なおちょ") {
    return name;
  } else {
    return `${name}さん`;
  }
});

console.log(newNameArr);
