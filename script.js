// JavaScript for the Market Trends Chart (for the Market Analysis page)
const marketCtx = document.getElementById('marketChart')?.getContext('2d'); // Safely check if the element exists
if (marketCtx) {
    const marketChart = new Chart(marketCtx, {
        type: 'line',
        data: {
            labels: ['2015', '2016', '2017', '2018', '2019', '2020'], // Example years
            datasets: [{
                label: 'Revenue Growth ($ Millions)',
                data: [500, 600, 700, 800, 900, 1100], // Example data for revenue
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
}

// JavaScript for Table Sorting (for the Player Financials page)
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

    // Function to sort the Player Financials table by the selected column
    function sortTableByColumn(table, columnIndex) {
        const rows = Array.from(table.rows).slice(1); // Exclude header row
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
});

// JavaScript for Filtering the Sponsorship Deals Table (for the Sponsorship Deals page)
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-sponsorship');
    const sponsorshipTable = document.getElementById('sponsorship-table');
    const rows = Array.from(sponsorshipTable.rows).slice(1); // Exclude header row

    searchInput.addEventListener('input', () => {
        const searchValue = searchInput.value.toLowerCase();
        rows.forEach(row => {
            const brand = row.cells[0].textContent.toLowerCase();
            const club = row.cells[1].textContent.toLowerCase();
            if (brand.includes(searchValue) || club.includes(searchValue)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });
});

// Helper function to create charts for other pages if needed (like Business Metrics or Market Analysis)
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

// Handling Sorting of Sponsorship Deals Table (Optional)
document.addEventListener('DOMContentLoaded', () => {
    const sponsorshipTable = document.getElementById('sponsorship-table');
    if (sponsorshipTable) {
        sponsorshipTable.addEventListener('click', (event) => {
            if (event.target.tagName === 'TH') {
                const columnIndex = event.target.cellIndex;
                sortTableByColumn(sponsorshipTable, columnIndex);
            }
        });
    }
});

// Sort Sponsorship Table by column
function sortTableByColumn(table, columnIndex) {
    const rows = Array.from(table.rows).slice(1); // Exclude header row
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
// Function to toggle the mobile navigation menu visibility
function toggleMobileNav() {
    const nav = document.getElementById("mobileNav");
    nav.style.display = nav.style.display === "block" ? "none" : "block";
}<!-- Hamburger Menu Button for Mobile -->
<button class="hamburger" onclick="toggleMobileNav()">☰</button>

<!-- Mobile Navigation Menu (hidden by default) -->
<div class="mobile-nav" id="mobileNav">
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="business.html">Business Metrics</a></li>
        <li><a href="player-financials.html">Player Financials</a></li>
        <li><a href="sponsorships.html">Sponsorship Deals</a></li>
        <li><a href="market-analysis.html">Market Analysis</a></li>
        <li><a href="football-story.html">Football Story</a></li>
    </ul>
</div>
