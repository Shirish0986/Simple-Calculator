function appendValue(value) {
    document.getElementById('result').value += value;
}

function calculateResult() {
    const resultField = document.getElementById('result');
    try {
        resultField.value = eval(resultField.value);
    } catch (error) {
        resultField.value = "Error";
    }
}

function clearResult() {
    document.getElementById('result').value = '';
}
