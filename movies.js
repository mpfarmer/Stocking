module.exports = {
    printAvatar: function() {
        console.log("Avatar");
    },

    printChappie: function() {
        console.log("Chappie");
    },
    favMovie: "The Matrix"
};


function printAvatar() {
    console.log("Avatar: PG-13");
}
function printChappie() {
    console.log("Chappie: R");
}
// Single export methods

// module.exports.avatar = printAvatar;
// module.exports.chappie = printChappie;

// var movie = new printAvatar();