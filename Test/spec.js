// // let a, b, c;

// // a=78;

// // b=67;

// // c=55;

// // if(a>b && a>c){
// // console.log(`${a} is the greatest number`);
// // } else if(b>a && b>c){
// //     console.log(`${b} is the greatest number`);
// // }else{
// //     console.log(`${c} is the greatest number`);
// // }

// // let arr = [45, "apple", 23, true];
// // for(let i of arr){
// //     console.log(i);
// // }










// // function specialNumber(number){
// //   return number%3;
// // }
// // console.log(specialNumber(10));
// // console.log(specialNumber(20));

// var student ={

//     fname: "Mike",

//     lName: "Smith",

//     age: 20,

//     languages:{

//                    b8:"Java",

//                    b9:"JavaScript"

//     },

//     offers:["capitalOne","Geico","accenture"]

// };console.log(`${student.fname} knows ${student.languages.b8} and he got an offer from ${student.offers[1]}.`);

// var str1 = "JavaScript";

// str2= "Java";

// let pass = str1.substring(str1.length-3).concat(str2.length);

// console.log(`The password is: ${pass}`);

// var str1 = "protractor";
// var str2 = "angular";
// var pass = str1.substr(str1.length-3).concat(str2.length);
// console.log(`The password is: ${pass}`);

// 

// function exists(arr){
//     let result=true;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i]==5 || arr[i]==10){
//             result =true;
//         }else{
//             result= false;
//         }
//     }
//     console.log(result);
// }
// exists([2,5]);
// exists([3,6,18]);
// exists([4,10,10,5]);

// let arr=[];
// for(let i = 0; i < 5; i++){
// let hours = parseInt(prompt("Enter your sleep hours for 5 days"));
// arr.push(hours);
// }

// function Student(fName, lName, age, sleepHours){
//        this.fName=fName;
//        this.lName=lName;
//        this.age = age;
//        this.sleepHours= sleepHours;

//        this.calcAvgHours = function(){
//            let avg = 0;
//            let total = 0;
//             for(let i = 0; i < sleepHours.length; i++){
//                  total += sleepHours[i];
//             }
//             avg = total/sleepHours.length;
//             console.log(this.fName+" average sleep hours is "+avg);
//        }
//    }
//    let st1 = new Student("Mike", "Smith", 22, arr);
//    st1.calcAvgHours();
//    let st2 = new Student("May", "Jogn", 18, arr);
//    st2.calcAvgHours();


// var button = element(by.xpath("//*[text()='Submit']"));

// browser.wait(ExpectedConditions.visibilityOf(button), 5000).then(()=>{

// button.click();

// })
// let result;
// var links = element.all(by.tagName("a"));
// links.count().then(count=>{
//     if(count>5){
//       result = "pass";
//     }else{
//         result = "fail";
//     }
// })




function getByCustomText(text){
   let elem = element(by.id("value"));
  expect(elem.getText()).toContain(text); 
}










