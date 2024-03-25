module.exports = function hello(min, max){
    let arr = [];
    for(i = min; i <= max; i++){
        arr.push(min);
        min++
    }
    const randomNum = Math.floor(Math.random() * arr.length);
    return arr[randomNum];
};