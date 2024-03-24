// Get player's choice of board size (S for small, M for medium, L for large)
function getBoardSize() {
    const validChoices = ['S', 'M', 'L'];
    let size;
    while (!validChoices.includes(size)) {
        size = prompt('Enter the board size (S)mall, (M)edium or (L)arge: ').toUpperCase();
    }
    return size;
}

// * Functions may be written to accept data as input. The data passed to a 
// function when called is known as arguments.
function getPointsScored(elapsedTime) {
    if (elapsedTime < 30) {
        return 100;
    } else if (elapsedTime < 60) {
        return 75;
    } else {
        return 25;
    }
}

    const points = getPointsScored(time);

// ? Assuming the variable time is equal to 50, what will points equal?
// output 75


// * Functions are the primary building blocks of programs.
// For example, here is how a line-of-business (LOB) type of application might be structured using several functions…
function main() {
    let date = new Date();  // today's date
    let sales = getSalesData(date);
    let labor = getLaborCosts(date);
    let budget = getBudget(date);
    let report = generateReport(date, sales, labor, budget);
    sendReport(report);
}

  // Run the main function
main();

/*--- helper functions ---*/

function getSalesData(forDate) {
    let netSales = getNetSales(forDate);
    let salesTax = computeSalesTax(netSales);
    return {netSales, salesTax};
}

function getLaborCosts(forDate) {
    // etc.
}

function getBudget(forDate) {
    // etc.
}

function generateReport(forDate, dailySales, dailyLabor, budget) {
    // etc.
}

    function sendReport(report) {
    // etc.
    }

  // etc.

// The code in a function does not execute until that function is called. 
// In the above example, if not for main();, no code would execute!

// When the JS engine loads the code, before executing it, it is checked for syntax errors. 
// A single syntax error prevents all of the code from running!

// * Functions commonly call other functions

let size, board;

function initialize() {
    size = getBoardSize();
    board = generateBoard(size);
    renderBoard();
}

// Programming languages themselves include functions built into the language, e.g., parseInt().