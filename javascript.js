// Question one
// Reverse a resulting and convert it into array
function reverseFunction() {
  let resultingDeta = 'dsbvkbsvkjb nay v nc znc jn jnzxkcj ';
  var len = resultingDeta.length, result = "";
  // console.log(result)
  for (var i = 0; i <= len - 1; i++) {
    result = result + resultingDeta[len - i - 1];
  }
  // return console.log(result)

  const split = (result, arr) => {
    const index = result.indexOf(" ");
    if (index > -1) {
      arr.push(result.slice(0, index));
      split(result.slice(index + 1), arr);
    } else {
      arr.push(result);
    }
    return "";
  };

  const chunks = (result) => {
    const arr = [];
    split(result, arr);
    return arr;
  };

  console.log(chunks(result));
}

// 2nd method of add new key into array

function updateArray() {
  let arrayData = [{ id: 1, name: 'Foo' }, { id: 2, name: 'Baz' }, { id: 3, name: 'Abc' }];
  var data = arrayData.map((item, index) => {
    item.mod = 'true';
    return item;
  });
  console.log(data)
}

// 3rd
// function arrayToString() {
// var arr = [{ key="11", value="1100" }, { key="22", value="2200" }];
// var obj = arr.reduce(function (obj, item) {
//   obj[item.key] = item.value; return obj;
// }, {});
// concole.log(JSON.stringify(obj));

// }


// 4th question
function arrayToObject(array, key) {
  var arr = [1, 2, 3, 4];
  var obj = arr.reduce(function (obj, value) {
    obj[value] = value;
    return obj
  }, {});
  console.log(obj)
}

// 5th question
function checkInput() {
  var inputVal = document.getElementById("txtbox").value;
  var myNum = +inputVal;
  if (isNaN(myNum)) {
     alert('input is string');
  } else{
     alert('input is number');
  }
}