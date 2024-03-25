module.exports = {
    area,
    circumference
}

function area(radius){
    const radiousSqr = radius * radius;
    const areaOfCircle = radiousSqr * 3.14;
    return areaOfCircle;
};

function circumference(radius){
    const circumferenceOfCircle = radius * 2 * 3.14
    return circumferenceOfCircle;
};