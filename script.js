// Chart.js: Market Trends (for the Market Analysis page)
const marketCtx = document.getElementById('marketChart').getContext('2d');
const marketChart = new Chart(marketCtx, {
    type: 'line',
    data: {
        labels: ['2015', '2016', '2017', '2018', '2019', '2020'],
        datasets: [{
            label: 'Revenue Growth ($ Millions)',
            data: [500, 600, 700, 800, 900, 1100], // Example data for market trends
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

// Player Financials Table Sorting (for the Player Financials page)
document.addEventListener('DOMContentLoaded', () => {
    const playerTable = document.getElementById('player-financials-table');
    if (playerTable) {
        playerTable.addEventListener('click', (event) => {
            if (event.target.tagName === 'TH') {
                const columnIndex = event.target.cellIndex;
                sortTableByColumn(playerTable, columnIndex);
            }
        });
    }
});

// Sorting Function for Player Financials Table
function sortTableByColumn(table, columnIndex) {
    const rows = Array.from(table.rows).slice(1); // Exclude the header row
    const isNumericColumn = !isNaN(rows[0].cells[columnIndex].textContent.trim());
    
    rows.sort((rowA, rowB) => {
        const cellA = rowA.cells[columnIndex].textContent.trim();
        const cellB = rowB.cells[columnIndex].textContent.trim();

        if (isNumericColumn) {
            return parseFloat(cellA.replace(/[^0-9.-]+/g, "")) - parseFloat(cellB.replace(/[^0-9.-]+/g, ""));
        }
        return cellA.localeCompare(cellB);
    });

    // Append the sorted rows back to the table
    rows.forEach(row => table.appendChild(row));
}

// Business Metrics: Simple Chart or Dynamic Data (for Business Metrics page)
const businessMetricsCtx = document.getElementById('businessMetricsChart').getContext('2d');
const businessMetricsChart = new Chart(businessMetricsCtx, {
    type: 'bar',
    data: {
        labels: ['Club A', 'Club B', 'Club C'],
        datasets: [{
            label: 'Revenue ($ Millions)',
            data: [500, 750, 1000], // Example club revenue data
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }, {
            label: 'Expenses ($ Millions)',
            data: [400, 600, 850], // Example club expense data
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
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

// Sponsorship Deals Table Filtering (for Sponsorship Deals page)
document.addEventListener('DOMContentLoaded', () => {
    const sponsorshipTable = document.getElementById('sponsorship-table');
    if (sponsorshipTable) {
        // Example of dynamic filtering or sorting implementation
        const searchInput = document.getElementById('search-sponsorship');
        searchInput.addEventListener('input', filterSponsorships);
    }
});

// Function to filter Sponsorship Deals table
function filterSponsorships() {
    const searchInput = document.getElementById('search-sponsorship').value.toLowerCase();
    const sponsorshipTable = document.getElementById('sponsorship-table');
    const rows = Array.from(sponsorshipTable.rows).slice(1); // Exclude header row

    rows.forEach(row => {
        const brand = row.cells[0].textContent.toLowerCase();
        const club = row.cells[1].textContent.toLowerCase();
        if (brand.includes(searchInput) || club.includes(searchInput)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

// Example Input Search Filter for Sponsorship Deals
document.addEventListener('DOMContentLoaded', () => {
    const searchHTML = `
        <input type="text" id="search-sponsorship" placeholder="Search by Brand or Club" />
    `;
    document.querySelector('#sponsorship-details').insertAdjacentHTML('beforebegin', searchHTML);
});

// Helper function to create charts for other pages
function createBarChart(ctx, labels, revenueData, expenseData) {
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Revenue ($ Millions)',
                data: revenueData,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }, {
                label: 'Expenses ($ Millions)',
                data: expenseData,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
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
}
