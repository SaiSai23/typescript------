var number = 10;
console.log(number);
{
    var myname_1 = "saisa";
    console.log("my name is ".concat(myname_1));
}
var myname = "phak";
console.log("my name is2 ".concat(myname));
//Expression การดำเนิน
var w = 21;
var h = 31;
console.log("\u0E1E\u0E37\u0E49\u0E19\u0E17\u0E35\u0E48\u0E2A\u0E35\u0E48\u0E40\u0E2B\u0E25\u0E35\u0E48\u0E22\u0E21\u0E40\u0E17\u0E48\u0E32\u0E01\u0E31\u0E1A ".concat(w * h));
var colors = ["red", "blue", "green"];
console.log(colors);
var student = {
    stdid: 6315400030124,
    stdname: "Saisaart",
    major: "Computer EN",
    grade: 3.99
};
console.log("\u0E23\u0E2B\u0E31\u0E2A\u0E19\u0E28 ".concat(student.stdid));
console.log("\u0E0A\u0E37\u0E48\u0E2D\u0E19\u0E28 ".concat(student.stdname));
var std = {
    id: "6315400030124",
    name: "Saisaart",
    ma: "Computer EN",
    g: 3.99
};
console.log("\u0E40\u0E01\u0E23\u0E14\u0E19\u0E28 ".concat(std.g));
console.log("\u0E0A\u0E37\u0E48\u0E2D\u0E19\u0E28 ".concat(std.name));
var check = true;
var score1 = 21;
var mgs = "Error";
var cars = ["Toyota", "Honda"];
var x;
console.log(x);
var showMsg = function (msg) {
    console.log("\u0E41\u0E2A\u0E14\u0E07\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21 ".concat(msg));
};
showMsg("TypeScript");
// const faculty = "Engineering"  (ค่าคงที่ ไม่สามารถเปลี่ยนค่าได้)
{
    var yourmane = process.argv[2];
    console.log("\u0E09\u0E31\u0E19\u0E21\u0E35\u0E19\u0E32\u0E21\u0E27\u0E48\u0E32 ".concat(yourmane));
}
// ตัวเลขโดย process
{
    var salary = process.argv.slice(2);
    console.log(salary);
}
// การแปลงค่า 
var sc = "20";
var sc0 = 20;
var sc1 = +sc;
console.log(sc0 * sc1);
var n1 = 20;
var n2 = 30;
var message;
if (n1 > n2) {
    message = "n1 มากกว่า n2";
}
else if (n2 > n1) {
    message = "n2 มากกว่า n1";
}
else {
    message = "n1 เท่ากับ n2";
}
console.log(message);
for (var i = 0; i <= 10; i++) {
    console.log(i);
}
for (var index in cars) {
    console.log(cars[index]);
}
