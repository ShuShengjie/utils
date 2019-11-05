  // 对象数组转换为二维数组
  // private objArr2ArrayTwo(objArr: any[]): string[][]{
  //   let arrTwo: string[][] = objArr.map((obj, index) => {
  //     return [index] = (<any>Object).values(obj);
  //   })
  //   return arrTwo
  // }
  // // private objArr2ArrayTwo(objArr: any[]): string[][]{
  //   let arrTwo: string[][] = [];
  //   objArr.forEach(obj => {
  //     const newArr: string[] = (<any>Object).values(obj);
  //     arrTwo.push(newArr);
  //   })
  //   return arrTwo;
  // }


//   /*
//     链式对象定义
//   */
//  class LazyManClass {
//   constructor(name) {
//     // this.name = name;
//     this.taskList = [];
//     this.init(name);
//   }
//   init(name) {
//     this.printLog('name', name);
//     setTimeout(() => {
//       this.next();
//     }, 0)
//   }
//   printLog(type, data) {
//     const LOG_MAP = {
//       'name': `HI, I am ${data}`,
//       'eat': `I am eating ${data}.`,
//       'sleep': `Waited for ${data} seconds.`,
//       'error': `Got something wrrong: ${data}.`
//     }
//     console.log(LOG_MAP[type]);
//   }
//   delayPromise(t) {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve();
//       }, t * 1000);
//     })
//   }
//   createTask(type, data) {
//     return async() => {
//       if (type === 'sleep') {
//         try{
//           await this.delayPromise(data);
//         } catch(e) {
//           this.printLog('error', e)
//         }
//       }
//       this.printLog(type, data);
//       this.next();
//     }
//   }
//   addTask(type, data, isFirst = false) {
//     if (isFirst) {
//       this.taskList.unshift(this.createTask(type, data));
//     } else {
//       this.taskList.push(this.createTask(type, data));
//     }
//   }
//   eat(str) {
//       this.addTask('eat', str);
//       return this;
//   }
//   sleep(t) {
//       this.addTask('sleep', t);
//       return this;
//   }
//   sleepFirst(t) {
//       this.addTask('sleep', t, true);
//       return this;
//   }
//   next() {
//     if (this.taskList.length > 0) {
//       let task = this.taskList.shift();
//       task && task();
//     }
//   }
// }
// function LazyMan(name) {
//   return new LazyManClass(name);
// };
// // LazyMan('Tony').sleep(2).eat('lunch');
// // LazyMan('Tony').eat('lunch').sleep(2).eat('dinner');
// // LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(2).sleep(3).eat('junk food');

// /**
//  * 
//  * 冒泡排序及改进
//  */
//  function bubbleSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       for (let j = 0; j < arr.length - i - 1; j ++) {
//         if (arr[j] > arr[j + 1]) {
//           const temp = arr[j];
//           arr[j] = arr[j + 1];
//           arr[j + 1] = temp;
//         }
//       }
//     }
//     return arr
//   }
//   console.time('maopao');
//   bubbleSort(randomArr)
//   console.timeEnd('maopao')


//   function bubbleSort1(arr) {
//     let i = arr.length - 1;
//     while(i > 0) {
//       let pos = 0;
//       for (let j = 0; j < i; j++) {
//         if (arr[j] > arr[j + 1]) {
//           pos = j;
//           const temp = arr[j];
//           arr[j] = arr[j + 1];
//           arr[j + 1] = temp
//         }
//       }
//       i = pos;
//     }
//     return arr;
//   }
//   console.time('maopao');
//   bubbleSort1(randomArr)
//   console.timeEnd('maopao')


//   /**
//    * 
//    * 
//    * 实现 (5).add(3).minus(2) 功能。
//    */
//   Number.prototype.add = function(number) {
//     return this.valueOf() + number
//   }
//   Number.prototype.minus = function(number) {
//     return this.valueOf() - number
//   }
//   console.log((5).add(1).minus(2))

//   /**
//    * 
//    * sleep函数
//    */


//   const sleep = (time) => {
//     return new Promise(resolve => {
//       setTimeout(resolve, time)
//     })
//   }
//   async function run() {
//     console.log('ready')
//     await sleep(1000)
//     console.log('run')
//   }
//   run();

//   const sleep = time => {
//   return new Promise(resolve => setTimeout(resolve,time))
//   }
//   sleep(1000).then(()=>{
//     console.log(1)
//   })

//   /**
//    * 
//    * 
//    * 已知如下数组：
//     var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
//     编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组

//    */

//   let arr1 = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
//   let newArr1 = new Set(arr1.flat(Infinity).sort((a, b) => a - b));
//   console.log(newArr1)

  /**
   * 手动实现instanceof
   */
  function myInstanceof(left, right) {
    if (typeof left !== 'object' || left === null) {
      return false;
    }
    let proto = Object.getPrototypeOf(left);
    while (true) {
      if (proto === null) {
        return false;
      }
      if (proto === right.prototype) {
        return true
      }
      proto = Object.getPrototypeOf(proto);
    }
  }
  console.log(myInstanceof("111", String)); //false
  console.log(myInstanceof(new String("111"), String));//true

