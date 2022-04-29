function addition(num1, num2) {
    if (isNaN(num1)) {
        return "error";
    } else if (isNaN(num2)) {
        return "error";
    } else {
        return num1 + num2;
    }
}

module.exports = addition;