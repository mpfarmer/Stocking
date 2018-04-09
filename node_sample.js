console.log("hello world!");
var person = {
    firstName: "Go",
    lastName: "Code",
    age: 28
};
console.log(person);
function addNumber(a, b) {
    return a + b;
}
console.log("addNumber(1, 9) = " + addNumber(1, 9));

function worthless() {}
console.log(worthless());
var printBacon = function() {
    console.log("bacon is healthy, don't believe the doctors!")
};
printBacon();
setTimeout(printBacon, 1000);
function placeAnOrder(orderNumber) {
    console.log("Customer order: ", orderNumber);
    cookAndDeliverFood(function() {
        console.log("Delivered food order: ", orderNumber);
    });
}

//Simulate a 1 second operation
function cookAndDeliverFood(callback) {
    setTimeout(callback, 1000);
}

//Simulate users web request
placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeAnOrder(5);
placeAnOrder(6);

var GoCode1 = {
    favFood: "bacon",
    favMovie: "Chappie"
};

var people = GoCode1;
people.favFood = "salad";
console.log(GoCode1.favFood);
console.log("28 == \"28\": " + (28 == "28"));
console.log("1 == '1': " + (1 == '1'));
console.log("28 === \"28\": " + (28 === "28"));
console.log("'1' === '1': " + '1' === '1');
var GoCode2 = {
    printFirstName: function() {
        console.log("My name is Bucky");
        console.log("this === GoCode2: ", this === GoCode2);
    }

};
GoCode2.printFirstName();
function doSomethingWorthless() {
    console.log("\nI am worthless");
    console.log("this === global: ", this === global);
}

doSomethingWorthless();

function GameUser() {
    this.name = "";
    this.life = 100;
    this.giveLife = function giveLife(targetPlayer) {
        targetPlayer.life += 1;
        console.log(this.name + " gave 1 life to " + targetPlayer.name);
    }
}
function User() {
    this.name = "";
}
var GoCode3 = new GameUser();
var GoCode4 = new GameUser();
GoCode3.name = "More";
GoCode4.name = "Less";
GoCode3.giveLife(GoCode4);
console.log("More: " + GoCode3.life);
console.log("Less: " + GoCode4.life);

//You can add functions to all objects
GameUser.prototype.uppercut = function uppercut(targetPlayer) {
    targetPlayer.life -= 3;
    console.log(this.name + " just uppercutted" + targetPlayer.name);
};
GoCode4.uppercut(GoCode3);
console.log("More: " + GoCode3.life);
console.log("Less: " + GoCode4.life);

GameUser.prototype.magic = 60;
console.log("More: " + GoCode3.magic);
console.log("Less: " + GoCode4.magic);

var movies = require('./movies');
movies.printAvatar();
console.log(movies.favMovie);
require('./coder');
require('./farmer');
//Core Module doesn't need './'
var fs = require('fs');
fs.writeFileSync("bean.txt", "Bean is great");
console.log(fs.readFileSync("bean.txt").toString());
var path = require('path');
var websiteHome = "D:/Code//Node//Stocking/Stocking/index.html";
var websiteAbout = "D:\\Code\\Node\\Stocking\\Stocking\\about.html";
console.log(path.normalize(websiteHome));
console.log(path.dirname(websiteHome));
console.log(path.normalize(websiteAbout));
console.log(path.extname(websiteAbout));
setInterval(function () {
    console.log("beef");
}, 2000);
console.log(__dirname);
console.log(__filename);

