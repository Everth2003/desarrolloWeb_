function convert() {
    const inputValue = document.getElementById('inputValue').value;
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    let result;

    if (inputValue === "") {
        result = "Por favor ingrese un valor.";
    } else {
        const value = parseFloat(inputValue);

        if (fromUnit === 'meters' && toUnit === 'feet') {
            result = `${value} metros son ${(value * 3.28084).toFixed(2)} pies.`;
        } else if (fromUnit === 'feet' && toUnit === 'meters') {
            result = `${value} pies son ${(value / 3.28084).toFixed(2)} metros.`;
        } else {
            result = "Seleccione unidades diferentes para la conversión.";
        }
    }

    document.getElementById('result').textContent = result;
}
