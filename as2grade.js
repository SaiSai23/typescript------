var salary = process.argv.slice(2);
var salar = +salary;
var sum = 0;
for (var x in salary) {
    var sum1 = +salary[x];
    sum = sum + sum1;
}
console.log("\u0E1C\u0E25\u0E23\u0E27\u0E21\u0E40\u0E25\u0E02\u0E40\u0E17\u0E48\u0E32\u0E01\u0E31\u0E1A ".concat(sum));
var g1 = sum;
var message;
if (g1 >= 80) {
    message = "เกรด A";
}
else if (g1 >= 70) {
    message = "เกรด B";
}
else if (g1 >= 60) {
    message = "เกรด C";
}
else if (g1 >= 50) {
    message = "เกรด D";
}
else {
    message = "เกรด F";
}
console.log("\u0E40\u0E01\u0E23\u0E14\u0E40\u0E17\u0E48\u0E32\u0E01\u0E31\u0E1A ".concat(message));
