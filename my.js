// 1부터 1만 사이의 3, 5의 배수 갯수

// var num;
// var count3 = 0;
// var count5 = 0;
// num = 1;
//
// for(num; num<=10000; num++){
//     if (num % 3 === 0){
//         count3++;
//     }
//     if (num % 5 === 0){
//         count5++;
//     }
// }
// console.log(`3의 배수는 ${count3}개`);
// console.log(`5의 배수는 ${count5}개`);
//

//=============================================================================

//20개의 data를 배열에 저장한 후 양수 / 음수, 양수일 때 짝 / 홀 개수 출력
//
// var nums = [1,2,3,4,5,6,0,-30,-50,-5,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10];
// var i = 0;
// var odd = 0;
// var even = 0;
// var plus = 0;
// var minus = 0;
// var zero = 0;
//
// while ((n = nums[i]) <= 20 && i++ < nums.length){
//     if (n > 0){
//         if (n % 2 === 0){
//             even++;
//         }
//         else if (n %2 !== 0){
//             odd++;
//         }
//         plus++;
//     }
//
//     else if (n < 0){
//         minus++;
//     }
//
//     else{
//         zero++;
//     }
// }
// console.log(`양수의 개수는 ${plus} 음수의 개수는 ${minus} 0의 개수는 ${zero}`);
// console.log(`양수 중 짝수의 개수는 ${even} 홀수의 개수는 ${odd}`);

//==============================================================================
//구구단 출력 2~9단

// var gugu;
// var first = 0;
// var second = 0;
// var hap = 0;
//
// for (first=2; first<10; first++){
//     console.log(`${first}단`);
//     for(second=1; second<10; second++)
//     console.log(`${first} x ${second} = ${first*second}`);
// }

//==============================================================================

//10명의 학생 성적을 출력하는 프로그램 사용

// hong = [100,100,100,100];
// kong = [90,90,90,90];
// jong = [80,80,80,80];
// long = [70,70,70,70];
// song = [60,60,60,60];
// yong = [50,50,50,50];
// tong = [40,40,40,40];
// rong = [30,90,90,90];
// bong = [20,80,80,80];
// mong = [10,10,10,10];
//
// var obj = {b1: 2, c1: 3, d1:4};
// var {a1, b1, c1} = obj;
// console.log(`\na1 = ${a1}\tb1 = ${b1}\tc1= ${c1}`);


var obj1 = {name : "Hong", a1 : 100, b1 : 100, c1 : 100, total : 300, score : "Excellent"};
var {name, a1, b1, c1, total, score} = obj1;
console.log(`${name}\t${a1}\t${b1}\t${c1}\t${total}\t${score}`);
