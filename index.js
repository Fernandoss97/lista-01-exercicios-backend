// Exercício 1
const calcFatorial = n => {
  let res = 1;

  for (i = n; i >= 2; i--) {
    res = res * i;
  }

  return res;
};

// Exercício 2
const returnMsg = (n, msg) => {
  let str = " ";

  for (i = 0; i < n; i++) {
    str = str + " " + msg;
  }

  return str;
};

// Exercício 3
const calcOperation = (v1, v2, op) => {
  if (op != "*" && op != "/" && op != "+" && op != "-") {
    return null;
  }

  if (op === "/" && v2 === 0) {
    return null;
  }

  if (op === "*") {
    return v1 * v2;
  }

  if (op === "/") {
    return v1 / v2;
  }

  if (op === "-") {
    return v1 - v2;
  }

  if (op === "+") {
    return v1 + v2;
  }
};

// Exercício 4
const calcTable = n => {
  let res = [];

  for (i = 0; i < 11; i++) {
    const op = n * i;
    res.push(op);
  }

  return res;
};

// Exercício 5
const revertNumber = n => {
  let nArr = n.toString().split("");
  let aux = 0;
  let dec = n.toString().length - 1;

  if (n.toString().length % 2 === 0) {
    for (i = 0; i < n.toString().length / 2; i++) {
      aux = nArr[i];
      nArr[i] = nArr[dec];
      nArr[dec] = aux;
      dec--;
    }

    return nArr.join("");
  } else {
    for (i = 0; i < Math.floor(n.toString().length / 2); i++) {
      aux = nArr[i];
      nArr[i] = nArr[dec];
      nArr[dec] = aux;
      dec--;
    }

    return nArr.join("");
  }
};

// Exercício 6
const countVowels = word => {
  const arr = word.toLowerCase().split("");
  let count = 0;

  console.log(arr);
  for (i = 0; i < word.length; i++) {
    if (arr[i] === "a" || arr[i] === "e" || arr[i] === "i" || arr[i] === "o" || arr[i] === "u") {
      count += 1;
    }
  }

  return count;
};

// Exercício 8
const generateObj = n => {
  const data = [
    "Louis",
    "Rachel",
    "Mike",
    "Donna",
    "Jessica",
    "Harvey",
    "Jenny",
    "Tess",
    "Daniel",
    "Trevor",
  ];
  const objects = [];

  for (i = 1; i <= n; i++) {
    const getName = data[Math.floor(Math.random() * data.length)];
    const getAge = Math.floor(Math.random() * (90 - 18 + 1)) + 18;

    objects.push({
      id: i,
      name: getName,
      age: getAge,
    });
  }

  return objects;
};

// Exercício 9
const calcAverAge = data => {
  let sumAge = 0;

  data.forEach(element => {
    sumAge += element.age;
  });

  return (sumAge / data.length).toFixed(1);
};
