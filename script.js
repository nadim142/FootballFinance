// Chart.js: Market Trends (for the Market Analysis page)
const marketCtx = document.getElementById('marketChart').getContext('2d');
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

// Sponsorship Deals Filtering (for Sponsorship Deals page)
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
