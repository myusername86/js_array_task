//1.create an array with days of the week and display thursday

const days=["sunday","monday","tuesday","wednesday","Thursday","friday","saturday"];
let a=days[4]
console.log("Fifth day of the week is:" + a)

//2.create an array with 5 elements and change the value of 3rd one

const color=["red","blue","green","yellow","white"];

console.log("Before alter an array:" +color)

let change=color[2]="pink"

console.log("after altering the third element:" +color)

//3.create an array with five element and swap 1st and 2nd

const subject=["English","science","maths","chemistry","biology"];

console.log("Before swapping: " +subject)

let temp=subject[0];

subject[0]=subject[1];

subject[1]=temp;

console.log("after swapping 1 and 2 :"+subject)

//4.create an empty array and add elements by push method

let empty=[];

empty.push("cat")

empty.push("kitty")

empty.push("Bob cat")

console.log("Array list : " + empty)


//If i was making a task manager application with the list of task ordered in a level of priority,what could be the role of the shift and pop method

let Taskmanager=["learning","practise","watching TV"]

let high_pri=Taskmanager.shift();
console.log("my highest priority task is: "+high_pri)

let low_pri=Taskmanager.pop();
console.log("My lowest priority task is :" +low_pri)

//in the above example role of shift() is remove the first element of an array .

//roleof the pop() is remove the last element of an array which has a least priority
