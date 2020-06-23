// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
b

// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for(var i = 0; i < a.length; i++){
	a[i] = a[i]*2;
}
console.log(a)


// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
  function getTextByJs(arr,x) {
      var str = "";
      for (var i = 0; i < arr.length; i++) {
      	  if (x == 1)
          str += arr[i]+ " ";
          if (x == 2)
          str += arr[i]+ "+";
          if (x == 3)
          str += arr[i]+ ",";
     }
     if (str.length > 0) {
         str = str.substr(0, str.length - 1);
     }
     return str;
 }
 var str = getTextByJs(colors,1)
 console.log(str)

// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
for(var i = 0; i < a.length -1; i++){
	for(var j = i + 1; j < a.length; j++){
       if(a[i] < a[j]){
         var temp = a[i]
         a[i] = a[j]
         a[j] = temp
       }
    }
}
console.log(a)
// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
var o = {};
for (var i = 0;i < a.length; i++) {
var char = a[i];
if (o[char]) {
o[char]++;
} else {
o[char] = 1;
}
}
console.log(o);
var max = 0;
for (let key in o) {
if (max < o[key]) {
max = o[key];
}
}
for (var key in o) {
if (o[key] == max) {
console.log("最多的字符是" + key);
console.log("出现的次数是" + max);
}
}