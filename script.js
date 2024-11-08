document.getElementById('update-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form values
    const clubName = document.getElementById('club-name').value;
    const revenue = document.getElementById('revenue').value;
    const expenses = document.getElementById('expenses').value;
    const netProfit = revenue - expenses;

    // Create a new row in the table
    const table = document.getElementById('finance-table').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    newRow.innerHTML = `
        <td>${clubName}</td>
        <td>$${revenue}</td>
        <td>$${expenses}</td>
        <td>$${netProfit}</td>
    `;

    // Clear form fields
    document.getElementById('update-form').reset();
});
