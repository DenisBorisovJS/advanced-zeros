module.exports = function getZerosCount(number, base) {
  const zerosCount = minZeros(base,number);

  return zerosCount;
}

function findFactorial(number,find) {
  var pow = 1;
  var factorial = 0;

  calculateFactorial(number,find);

  function calculateFactorial(number,find) {
    var stepen = Math.floor(number / Math.pow(find,pow))
    if (stepen > 0) {
      pow++;
      factorial += stepen;
      calculateFactorial(number,find);
    } else {
      pow = 1;
    }
  }

  return factorial;
}


function minZeros(base,number) {
  var simpleValues = [];
  var compound = {count:0,max:2};

  findMax(base)

  function findMax(base) {
    var simpleNumber = [2];

    for (var i = 2; i <= base; i++) {
      if (i % 2 == 1) {
        simpleNumber.push(i)
      }
    }

    do {
      for (let i of simpleNumber) {
        if (base % i == 0) {
          base /= i
          if (compound.max < i) {
            compound.count = 1;
            compound.max = i;
            simpleValues.push(findFactorial(number,compound.max)/compound.count);
          } else {
            compound.count++;
            simpleValues.push(findFactorial(number,compound.max)/compound.count);
          }
          break
        }
      }
    } while (base != 1);
  }

  var min = Math.min.apply(null, simpleValues)
  return Math.floor(min);
}

Array.prototype.max = function() {
  return Math.max.apply(null, this);
};
