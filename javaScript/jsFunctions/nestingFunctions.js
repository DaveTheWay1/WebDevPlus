// * Nesting Functions
function openNewAccount(name, openingBalance) {
    let acctNum = generateAcctNum();
    
    // createAccount is a function available outside this function
    let acct = createAccount(acctNum, openingBalance);
    return acct;
    
    // helper function that provides a unique account number
    function generateAcctNum() {
      return Date.now();  // super amazing algorithm :)
    }
}