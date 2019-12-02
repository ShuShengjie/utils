// /*
// 随机生成一个长度为 10 的整数类型的数组，例如 [2, 10, 3, 4, 5, 11, 10, 11, 20]，将其排列成一个新数组，要求新数组形式如下，例如 [[2, 3, 4, 5], [10, 11], [20]]。
// */

// // 生成范围内随机整数
// let randomNum = function(min, max) {
//   if (!max) {
//     max = min;
//     min = 0;
//   }
//   return min + (Math.floor(Math.random() * (max - min + 1)))
// }
// // 传入数组长度，随机最小值和最大值
// let randomArr = function(len,min,max) {
//   if((max-min)<len){ //可生成数的范围小于数组长度
//       return null;
//   }
//   let hash = [];

//   while(hash.length<len){
//     let num = randomNum(min,max);
      
//       if(hash.indexOf(num) === -1){
//             hash.push(num);
//       }
//   }
//   return hash;
// }
// // 将数组按十位数分类
// let change2newArr = function(numArr) {
//   let newArr = Array.from(new Set(numArr)).sort((a, b) => a - b);
//   const map = new Map();
//   newArr.forEach((v) => {
//     const key = Math.floor(v / 10);
//     const group = map.get(key) || [];
//     group.push(v);
//     map.set(key, group);
//   })
//   return [...map.values()];
// }
// let newArr = change2newArr(randomArr(10, 1, 30))


//  /*
//     给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

//     你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

//     示例:

//     给定 nums = [2, 7, 11, 15], target = 9

//     因为 nums[0] + nums[1] = 2 + 7 = 9
//     所以返回 [0, 1]
//   */
//  let twoSum = function(nums, target) {
//   const map = {};
//   let result = [];
//   nums.forEach((num, index) => {
//     const targetNum = target - nums[index];
//     if (targetNum in map) {
//       result = [map[targetNum], index];
//     }
//     map[nums[index]] = index;
//   })
//   return result
// }
// // twoSum([2, 7, 11, 15], 9)

//   /*
//   如下：{1:222, 2:123, 5:888}，请把数据处理为如下结构：[222, 123, null, null, 888, null, null, null, null, null, null, null]。
//   */
//   let scale = {
//     1: 222,
//     2: 123,
//     5: 888
//   }
//   let result = Array.from({length:12}).map((val, index) => {
//     console.log(index)
//     return scale[index + 1] || null
//   });
//   console.log(result)
  
//  /**
//   *  给定字符串J 代表石头中宝石的类型，和字符串 S代表你拥有的石头。 S 中每个字符代表了一种你拥有的石头的类型，你想知道你拥有的石头中有多少是宝石。

//       J 中的字母不重复，J 和 S中的所有字符都是字母。字母区分大小写，因此"a"和"A"是不同类型的石头。

//       示例 1:

//       输入: J = "aA", S = "aAAbbbb"
//       输出: 3
//       示例 2:

//       输入: J = "z", S = "ZZ"
//       输出: 0
//       注意:

//       S 和 J 最多含有50个字母。
//        J 中的字符不重复。
//   */

//   let numJewelsInStones = function(J, S) {
//       let JArr = J.split('');
//       let SArr = S.split('');
//       return SArr.filter(item => JArr.includes(item)).length
//   };

//   /**
//    * 给你一个有效的 IPv4 地址 address，返回这个 IP 地址的无效化版本。

//       所谓无效化 IP 地址，其实就是用 "[.]" 代替了每个 "."。

//        

//       示例 1：

//       输入：address = "1.1.1.1"
//       输出："1[.]1[.]1[.]1"
//       示例 2：

//       输入：address = "255.100.50.0"
//       输出："255[.]100[.]50[.]0"
//    */
//   var defangIPaddr = function(address) {
//     return address.replace(/\./g,"[.]")
//   };

let ary = [1, [2, [3, [4, 5]]], 6];
let str = JSON.stringify(ary);
/**
 * 1、利用es6中的flat
 */
// console.log(ary.flat(Infinity));

/**
 * 2、利用replace+split
 */
// ary = str.replace(/(\[|\])/g, '').split(',');
// console.log(ary)

/**
 * 3、利用replace+JSON.parse
 */
// str = str.replace(/(\[|\])/g, '');
// str = '[' + str + ']';
// console.log(str);
// ary = JSON.parse(str);
// console.log(ary)

/**
 * 4、普通递归
 */
// let result = [];
// let fn = function(ary) {
//   for (let i = 0; i < ary.length; i++) {
//     let item = ary[i];
//     if (Array.isArray(item)) {
//       fn(item)
//     } else {
//       result.push(item)
//     }
//   }
// }
// fn(ary)
// console.log(result)

/**
 * 5、利用reduce函数迭代
 */
// function flatten(ary) {
//   return ary.reduce((pre, cur) => {
//     return pre.concat(Array.isArray(cur) ? flatten(cur) : cur)
//   }, [])
// }
// console.log(flatten(ary))

/**
 * 6、扩展运算符
 */
// while(ary.some(Array.isArray)){
//   ary = [].concat(...ary)
// }
// console.log(ary)

/**
 * 模拟实现map函数
 */
Array.prototype.myMap = function(callback, thisArg) {
  // 处理数组类型异常
  if (this === null || this === undefined) {
    throw new TypeError('cannot read property of null or undefined')
  }
  // 处理回调类型异常
  if (Object.prototype.toString.call(callback) !== '[object Function]') {
    throw new TypeError(callback + 'is not a function')
  }
  // 先转换为对象
  let O = Object(this);
  let T = thisArg;
  let len = O.length >>> 0;
  // length >>> 0 实际上是把前面的空位用0填充，这里的作用是保证len为数字且为整数。
  let A = new Array(len);
  for (let i = 0; i < len; i++) {
    if (i in O) {
      let value = O[i];
      let mappedValue = callback.call(T, value, i, O);
      A[i] = mappedValue
    }
  }
  return A;
}
let numArr = [1, 2, 3];
console.log(numArr.myMap(function(elem){
  return elem * 2
}));

/**
 * 实现数组reduce方法
 */
Array.prototype.myReduce = function(callback, initVal) {
  if (this === null || this === undefined) {
    return new TypeError('cannot read reduce of null or undefined')
  }
  if (Object.prototype.toString.call(callback) !== '[object Function]') {
    return new TypeError(callback + 'is not a function')
  }
  let O = Object(this);
  let len = O.length >>> 0;
  let start = initVal;
  let k = 0;
  if (start === undefined) {
    for (; k < len; k++) {
      if (k in O) {
        start = O[k];
        k++;
        break;
      }
    }
    return new TypeError('array is empty')
  }
  for (;k < len; k++) {
    if (k in O) {
      start = callback.call(undefined, start, O[k], O)
    }
  }
  return start;
}
/**
 * 实现数组的push方法
 */
Array.prototype.push = function(...items) {
  let O = Object(this);
  let len = this.length >>> 0;
  let argLength = items.length >>> 0;
  if (len + argLength > 2 ** 53 - 1) {
    return new TypeError('number is over max')
  }
  for (let i = 0; i < argLength; i++) {
    O[len + i] = items[i];
  }
  let newLength = len + argLength;
  O.length = newLength;
  return newLength;
}
/**
 * 实现数组pop方法
 */
Array.prototype.pop = function() {
  let O = Object(this);
  let len = this.length >>> 0;
  if (len === 0) {
    O.length = 0;
    return undefined;
  }
  len--;
  let value = O[len];
  delete O[len];
  O.length = len;
  return value;
}
/**
 * 实现数组filter方法
 */
Array.prototype.myFilter = function(callback, thisArg) {
  if (this === null || this === undefined) {
    throw new TypeError('cannot read filter of null or undefined')
  }
  if (Object.prototype.toString.call(callback) != "[object Function]") {
    throw new TypeError(callback + ' is not a function')
  }
  let O = Object(this);
  let len = O.length >>> 0;
  let resLen = 0;
  let res = [];
  for (let i = 0; i < len; i++) {
    if (i in O) {
      let element = O[i];
      if (callback.call(thisArg, O[i], i, O)) {
        res[resLen++] = element;
      }
    }
  }
  return res;
}
/**
 * 实现数组splice方法
 */
// Array.prototype.mySplice = function(startIndex, deleteCount, ...addElements) {
//   let argumentsLen = arguments.length;
//   let array = Object(this);
//   let len = array.length;
//   let deleteArr = new Array(deleteCount);
//   sliceDeleteElements(array, startIndex, deleteCount, deleteArr);
  
// }
// const sliceDeleteElements = (array, startIndex, deleteCount, deleteArr) => {
//     for (let i = 0; i < deleteCount; i++) {
//       let index = startIndex + i;
//     }
// }

