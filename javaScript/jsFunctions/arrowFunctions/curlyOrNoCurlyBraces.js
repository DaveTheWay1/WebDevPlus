const useCurlyBraces = (x) => {
    console.log('you want to use curly braces when it is more than one thing to do');
    console.log(`as we are here now, having more than ${x} things to do`);
}
useCurlyBraces(2);
// output
// you want to use curly braces when it is more than one thing to do
// as we are here now, having more than 2 things to do

const noCurlyBraces = x => `no curly braces OR return required as there is only ${x} thing to do`;
console.log(noCurlyBraces(1));
// output: no curly braces OR return required as there is only 1 thing to do

const doesntMatterTheArgs = (x,y) => `doesn't matter if it is ${x} or ${y} amount of args, as long as there isnt more than ${1} thing to do it doesnt need curly braces!!`
console.log(doesntMatterTheArgs(1,2));
// doesn't matter if it is 1 or 2 amount of args, as long as there isnt more than 1 thing to do it doesnt need curly braces!!