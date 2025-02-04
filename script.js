document.getElementById('salaryForm').addEventListener('submit', (event)=> {
    event.preventDefault();
    // Obtener los valores del formulario
    const currentSalary = parseFloat(document.getElementById('currentSalary').value);
    const increasePercentage = parseFloat(document.getElementById('increasePercentage').value);
    // Calcular el aumento salarial
    const increaseAmount = (currentSalary * increasePercentage) / 100;
    const newSalary = currentSalary + increaseAmount;
    // Mostrar el resultado
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        <p>Salario Actual: $${currentSalary.toFixed(2)}</p>
        <p>Aumento: $${increaseAmount.toFixed(2)} (${increasePercentage}%)</p>
        <p>Nuevo Salario: $${newSalary.toFixed(2)}</p>
    `;
});
