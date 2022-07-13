// 1 PUSH
let array1 = [5, 2, 4, 3, 1];
array1.push(8);
console.log(array1);

// 2 POP
let array2 = [5, 2, 4, 3, 1];
array2.pop();
console.log(array2);

// 3 UNSHIFT
let array3 = [5, 2, 4, 3, 1];
array3.unshift(9);
console.log(array3);

// 4 SHIFT
let array4 = [5, 2, 4, 3, 1];
array4.shift();
console.log(array4);

// 5 SPLICE
let array5 = [5, 2, 4, 3, 1];
array5.splice(1,3,0,0)
console.log(array5)

// 6 SLICE
let array6 = [5, 2, 4, 3, 1];
let result6 = array6.slice(1,3);
console.log(result6);
console.log(array6);

// 7 CONCAT
let array7 = [1,2,3];
let strings = ['one', 'two', 'three'];
let newarray = array7.concat(strings);
console.log(newarray);

// 8 INDEXOF
let array8 = ['one', 'two', 'three'];
console.log(array8.indexOf('four'))

// 9 INCLUDES
let array9 = ['one', 'two', 'three'];
console.log(array9.includes('two'));

// 10 FIND
let array10 = [
    {id: 1, name: 'Jhon'}, 
    {id: 2, name: 'Celine'},
    {id: 3, name: 'Marine'}
];
let result10 = array10.find(item => item.id == 4);
console.log(result10);

// 11 FINDINDEX
let array11 = [
    {id: 1, name: 'Jhon'}, 
    {id: 2, name: 'Celine'},
    {id: 3, name: 'Marine'}
];
let result11 = array11.findIndex(index => index.name == 'David')
console.log(result11);

// 12 FILTER
let array12 = [
    {id: 1, name: 'Jhon'}, 
    {id: 2, name: 'Celine'},
    {id: 3, name: 'Marine'}
];
let result12 = array12.filter(item => item.id<=2);
console.log(result12);

// 13 FOREACH
let array13 = [5, 2, 4, 3, 1];
let result13 = []
array13.forEach((item) => result13.push(item*10))
console.log(result13);

// 14 MAP
let array14 = [5, 2, 4, 3, 1];
let rasult14 = array14.map(item=>item*10);
console.log(rasult14);

// 15 SORT
let array15 = [5, 2, 10, 3, 1];
array15.sort((a,b)=>a-b);
console.log(array15);

// 16 REVERSE
let array16 = [5, 2, 4, 3, 1];
array16.reverse();
console.log(array16);

// 17 SPLIT
let string = 'amanecer';
let result17 = string.split('');
console.log(result17);

// 18 JOIN
let array18 = ['one', 'two', 'three'];
let result18 = array18.join('/')
console.log(result18);

// 19 REDUCE 
let array19 = [5, 2, 4, 3, 1];
let result19 = array19.reduce((sum, index)=>sum+index, 100)
console.log(result19)