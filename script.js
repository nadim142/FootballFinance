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

// Example Chart for Market Trends (You can replace the data with real data)
const ctx = document.getElementById('marketChart').getContext('2d');
const marketChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2015', '2016', '2017', '2018', '2019', '2020'],
        datasets: [{
            label: 'Revenue Growth',
            data: [500, 600, 700, 800, 900, 1100], // Sample data
            borderColor: 'rgba(75, 192, 192, 1)',
            fill: false
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

});
