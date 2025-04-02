document.addEventListener('DOMContentLoaded', function() {
    // Simulate real-time data updates
    setInterval(updateFuelLevels, 5000);
    setInterval(updateTransactions, 10000);
    
    // Initialize the dashboard
    initDashboard();
    
    // Set up event listeners
    setupEventListeners();
});

function initDashboard() {
    // You can add initialization logic here
    console.log('EazyMonitor dashboard initialized');
}

function setupEventListeners() {
    // Alert action buttons
    document.querySelectorAll('.alert-action').forEach(button => {
        button.addEventListener('click', function() {
            const alert = this.closest('.alert');
            alert.style.opacity = '0';
            setTimeout(() => {
                alert.remove();
                updateAlertCount();
            }, 300);
        });
    });
    
    // Sidebar navigation
    document.querySelectorAll('.sidebar nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector('.sidebar nav li.active').classList.remove('active');
            this.closest('li').classList.add('active');
            // In a real app, you would load content here
        });
    });
}

function updateFuelLevels() {
    // Simulate changing fuel levels
    const tanks = document.querySelectorAll('.tank-level');
    tanks.forEach(tank => {
        const currentLevel = parseInt(tank.style.height);
        const change = Math.floor(Math.random() * 6) - 2; // Random change between -2% and +3%
        let newLevel = currentLevel + change;
        
        // Keep levels between 10% and 95%
        newLevel = Math.max(10, Math.min(95, newLevel));
        
        tank.style.height = `${newLevel}%`;
        tank.nextElementSibling.textContent = `${newLevel}%`;
        
        // Update colors based on level
        if (newLevel < 30) {
            tank.style.backgroundColor = '#e74c3c'; // Red for low
        } else if (newLevel < 50) {
            tank.style.backgroundColor = '#f39c12'; // Orange for medium
        } else {
            // Reset to original colors
            const fuelType = tank.closest('.tank').querySelector('.tank-label').textContent;
            if (fuelType.includes('Regular')) {
                tank.style.backgroundColor = '#4CAF50';
            } else if (fuelType.includes('Plus')) {
                tank.style.backgroundColor = '#2196F3';
            } else if (fuelType.includes('Premium')) {
                tank.style.backgroundColor = '#FF9800';
            } else {
                tank.style.backgroundColor = '#9E9E9E';
            }
        }
    });
    
    // Check for low fuel alerts
    checkLowFuelAlerts();
}

function updateTransactions() {
    // Simulate new transactions
    const tableBody = document.querySelector('table tbody');
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    const fuelTypes = ['Regular (87)', 'Plus (89)', 'Premium (91)', 'Diesel'];
    const paymentMethods = ['Credit', 'Debit', 'Cash', 'Mobile Pay'];
    const statuses = ['completed', 'in-progress'];
    
    const randomAmount = (Math.random() * 50 + 15).toFixed(2);
    const newRow = document.createElement('tr');
    
    newRow.innerHTML = `
        <td>${timeString}</td>
        <td>Pump ${Math.floor(Math.random() * 6) + 1}</td>
        <td>${fuelTypes[Math.floor(Math.random() * fuelTypes.length)]}</td>
        <td>$${randomAmount}</td>
        <td>${paymentMethods[Math.floor(Math.random() * paymentMethods.length)]}</td>
        <td><span class="status ${statuses[Math.floor(Math.random() * statuses.length)]}">${statuses[Math.floor(Math.random() * statuses.length)].replace('-', ' ')}</span></td>
    `;
    
    tableBody.insertBefore(newRow, tableBody.firstChild);
    
    // Limit to 10 rows
    if (tableBody.children.length > 10) {
        tableBody.removeChild(tableBody.lastChild);
    }
}

function checkLowFuelAlerts() {
    // Check if any tank is below 35% and not already alerted
    const tanks = document.querySelectorAll('.tank');
    const alertsContainer = document.querySelector('.alerts-container');
    
    tanks.forEach(tank => {
        const level = parseInt(tank.querySelector('.tank-value').textContent);
        const fuelType = tank.querySelector('.tank-label').textContent;
        
        if (level < 35 && !document.querySelector(`.alert h3:contains("${fuelType}")`)) {
            // Create new alert
            const newAlert = document.createElement('div');
            newAlert.className = 'alert critical';
            newAlert.innerHTML = `
                <div class="alert-icon">
                    <i class="fas fa-exclamation-circle"></i>
                </div>
                <div class="alert-content">
                    <h3>Low Fuel Level - ${fuelType}</h3>
                    <p>Tank level below 35%. Consider ordering more fuel.</p>
                    <span class="alert-time">Just now</span>
                </div>
                <button class="alert-action">Acknowledge</button>
            `;
            
            alertsContainer.prepend(newAlert);
            updateAlertCount();
            
            // Add event listener to new button
            newAlert.querySelector('.alert-action').addEventListener('click', function() {
                newAlert.style.opacity = '0';
                setTimeout(() => {
                    newAlert.remove();
                    updateAlertCount();
                }, 300);
            });
        }
    });
}

function updateAlertCount() {
    const alertCount = document.querySelectorAll('.alert').length;
    document.querySelector('.card:nth-child(4) p').textContent = `${alertCount} Active`;
    
    if (alertCount > 0) {
        document.querySelector('.card:nth-child(4) .status-text').textContent = 'Needs attention';
        document.querySelector('.card:nth-child(4) .status-text').style.color = '#e74c3c';
    } else {
        document.querySelector('.card:nth-child(4) .status-text').textContent = 'All clear';
        document.querySelector('.card:nth-child(4) .status-text').style.color = '#95a5a6';
    }
}
