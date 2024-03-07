// * Fewer Arguments Than Parameters Defined
// If fewer arguments are passed than parameters defined, 
// then the parameter variables without a matching argument would be set to undefined.

// Note: Unlike some other programming languages, JavaScript won’t complain if fewer 
// (or extra) arguments are passed to a function. However, a function that depends on 
// certain arguments to do its job might throw an error or return an unexpected result 
// if it doesn’t receive the arguments expected.

// * Extra Arguments Than Parameters Defined
function getPointsScored(...times) {
    // times will be an array holding the args (see Rest Parameters in the docs)
    // Perfect use case for the Array.reduce method, but that's another day...
    let totalPoints = 0;
    times.forEach(function(time) {
        if (time < 30) {
        totalPoints += 100;
        } else if (time < 60) {
        totalPoints += 75;
        return 75;
        } else {
        totalPoints += 25;
        }
    });
    return totalPoints;
    }
const points = getPointsScored(16, 99, 32, 60);
console.log(points);
// 225
// a return is triggered but it does not stop there bc it is a forEach.. BUILT IN to go through all
// elements. so it continues and thats how we get 225