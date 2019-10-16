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


 /*
    给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

    你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

    示例:

    给定 nums = [2, 7, 11, 15], target = 9

    因为 nums[0] + nums[1] = 2 + 7 = 9
    所以返回 [0, 1]
  */
 let twoSum = function(nums, target) {
  const map = {};
  let result = [];
  nums.forEach((num, index) => {
    const targetNum = target - nums[index];
    if (targetNum in map) {
      result = [map[targetNum], index];
    }
    map[nums[index]] = index;
  })
  return result
}
// twoSum([2, 7, 11, 15], 9)

  /*
  如下：{1:222, 2:123, 5:888}，请把数据处理为如下结构：[222, 123, null, null, 888, null, null, null, null, null, null, null]。
  */
  let scale = {
    1: 222,
    2: 123,
    5: 888
  }
  let result = Array.from({length:12}).map((val, index) => {
    console.log(index)
    return scale[index + 1] || null
  });
  console.log(result)