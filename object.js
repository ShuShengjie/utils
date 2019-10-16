/*
随机生成一个长度为 10 的整数类型的数组，例如 [2, 10, 3, 4, 5, 11, 10, 11, 20]，将其排列成一个新数组，要求新数组形式如下，例如 [[2, 3, 4, 5], [10, 11], [20]]。
*/

// 生成范围内随机整数
let randomNum = function(min, max) {
  if (!max) {
    max = min;
    min = 0;
  }
  return min + (Math.floor(Math.random() * (max - min + 1)))
}
// 传入数组长度，随机最小值和最大值
let randomArr = function(len,min,max) {
  if((max-min)<len){ //可生成数的范围小于数组长度
      return null;
  }
  let hash = [];

  while(hash.length<len){
    let num = randomNum(min,max);
      
      if(hash.indexOf(num) === -1){
            hash.push(num);
      }
  }
  return hash;
}
// 将数组按十位数分类
let change2newArr = function(numArr) {
  let newArr = Array.from(new Set(numArr)).sort((a, b) => a - b);
  const map = new Map();
  newArr.forEach((v) => {
    const key = Math.floor(v / 10);
    const group = map.get(key) || [];
    group.push(v);
    map.set(key, group);
  })
  return [...map.values()];
}
let newArr = change2newArr(randomArr(10, 1, 30))