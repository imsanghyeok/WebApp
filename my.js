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


console.log( "\n4. 10명의 학생 성적을 출력하는 프로그램(object 사용)\n" );
const MAX_SUBJECT = 3;
const EXCELLENT = 90;
const FAIL = 60;

var students = [ { name: "hong", subjects: [ 50, 50, 50 ], total: 0, average: 0.0, grade: "Normal" },
{ name: "kim", subjects: [ 90, 90, 90 ], total: 0, average: 0.0, grade: "Normal" },
{ name: "lee", subjects: [ 70, 70, 70 ], total: 0, average: 0.0, grade: "Normal" },
{ name: "park", subjects: [ 60, 60, 60 ], total: 0, average: 0.0, grade: "Normal" },
{ name: "yoon", subjects: [ 40, 40, 40 ], total: 0, average: 0.0, grade: "Normal" },
{ name: "im", subjects: [ 30, 30, 30 ], total: 0, average: 0.0, grade: "Normal" },
{ name: "oh", subjects: [ 20, 20, 20 ], total: 0, average: 0.0, grade: "Normal" },
{ name: "gong", subjects: [ 80, 80, 80 ], total: 0, average: 0.0, grade: "Normal" },
{ name: "kang", subjects: [ 77, 77, 77 ], total: 0, average: 0.0, grade: "Normal" },
{ name: "seo", subjects: [ 66, 86, 89 ], total: 0, average: 0.0, grade: "Normal" } ];

for ( var student of students ) {
    for ( var subject of student["subjects"] ) {
        student["total"] += subject;
    }
    student["average"] = student["total"] / MAX_SUBJECT;
    if ( student["average"] >= EXCELLENT ) {
        student["grade"] = "Excellent";
    } else if ( student["average"] < FAIL ) {
        student["grade"] = "Fail";
    }
    console.log( student );
}
