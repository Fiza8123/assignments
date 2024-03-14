var fullnAme = "ahad";
console.log(fullnAme);
// example of  strong string
var numbers = 345662;
console.log(numbers);
//example ofstrong number
var soMesoMe = false;
console.log(soMesoMe);
//example of strong boolean 
var inDone = 123;
console.log(inDone);
//example of strong any 
var mYnamE = "fiza amir";
console.log(mYnamE);
//example of string 
var numerical = 234;
console.log(numerical);
//example of number
var boolean = true;
console.log(boolean);
//example of boolean
// types of writting
// cameLCase
//snake_case
//PascalCase
var userName = "fizza"; // e.g. camelCase
var user_name = "fatima"; //e.g. snake_case
var UserName = "bisma"; //e.g. PascalCase
var isUserExist = true;
var is_user_exist = false;
var IsUserExist = 123;
var anyType = 
// = is assigment operator
console.log(userName, user_name, UserName);
console.log(isUserExist, is_user_exist, IsUserExist);
console.log(anyType);
//arrays=> []
//=> 0,..... 
//array address in list
var students = ["Noman", "Ali", "ahad", 1, 10, true];
var firststudentName = students[0];
console.log(firststudentName);
console.log(students);
console.log(students[5]);
console.log(students[3]);
// if we wonna exist one name in list
var friends = ["fiza", "saba", "sana"];
console.log(friends);
var student = ["wassem"];
console.log(student[0]);
//example that who can we make array conform to accept only string . it can also work in any type of types of writing in typescript
var numberArray = [1, 2, 3, 4];
console.log(numberArray);
//example of array of number
var booleanArray = [true, false];
console.log(booleanArray);
//example of array of boolean 
var zuserName = "ali";
zuserName = "ahmed";
console.log(zuserName);
//do it in array
//string in example:
var fruits = ["apple", "banana", "orange"];
fruits[1] = "grapes";
console.log(fruits);
//boolean in example:
var game = [true, false];
game[0] = false;
console.log(game);
// objects =>{}  => {key: value} pair
var user = {
    key: "value",
    key2: 234,
    key3: true,
    key4: " fiza",
    firstname: "ahad",
};
var student1 = {
    fullname: "example",
    classId: "ABC",
    rollnumber: 25,
    email: "example@b.com",
    ispassed: true,
};
//array of abject:
var student2 = {
    fullname: "example 2",
    classId: "ABC",
    rollnumber: 25,
    email: "example@b.com",
    ispassed: true,
    subjects: ["English", "urdu", "programming"]
};
console.log(user);
console.log(student1);
console.log(student2);
var student3 = [student, student2, {
        fullname: "example 2",
        classId: "ABC",
        rollnumber: 25,
        email: "example@b.com",
        ispassed: true,
        subjects: ["English", "urdu", "programming"]
    }];
console.log(student3[2].subjects[1]);
//[] =>
// [value, value2, value3]
//["a","b"] => arr of string
//[[], [], []] => arr of array
//{} => empty object
//{key:value}
//{key: "a", key2: [] }
console.log(student3);
var arr = [{}, {}, [], {}];
var objects = {
    key: {
        key: {}
    },
};
console.log(arr);
console.log(objects);
//thats called nested array
var array = [{
        name: "fiza",
        number: 123,
        key: {
            half: "butter",
            light: "bread",
        }
    }];
console.log(array);
// concatination use +
//type of object:
