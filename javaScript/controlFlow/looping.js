// * Looping
//     ↓--------- ↓ -> conditional expression
while (points < 100) {
    let move = getPlayerMove();
    points += getPoints(move);
}
// * Code is repeatedly executed while a condition is truthy.