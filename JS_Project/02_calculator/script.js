let currentExpression = "";

// Append value to the result input
function appendValue(value) {
    currentExpression += value;
    document.getElementById("result").value = currentExpression;
}

// Clear the result input
function clearResult() {
    currentExpression = "";
    document.getElementById("result").value = "";
}

// Delete the last character
function deleteLast() {
    currentExpression = currentExpression.slice(0, -1);
    document.getElementById("result").value = currentExpression;
}

// Calculate the result
function calculate() {
    try {
        currentExpression = eval(currentExpression).toString();
        document.getElementById("result").value = currentExpression;
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}
