window.onload = function() {
    // Sample data for demonstration
    const revenueData = [120, 80, 150, 100, 200];
    const orderData = [10, 6, 8, 12, 9];
  
    // Update values in the dashboard
    document.getElementById("total-clients").textContent = getRandomNumber();
    document.getElementById("total-orders").textContent = getRandomNumber();
    document.getElementById("revenue-ratio").textContent = getRandomNumber() + "%";
  
    // Chart.js initialization and configuration for revenue chart
    const revenueChartCanvas = document.getElementById("revenue-chart").getContext("2d");
    const revenueChart = new Chart(revenueChartCanvas, {
      type: "line",
      data: {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        datasets: [{
          label: "Revenue",
          data: revenueData,
          backgroundColor: "rgba(179, 139, 109, 0.5)",
          borderColor: "#b38b6d", // Change line color to #b38b6d
          borderWidth: 2,
          pointRadius: 3,
          pointBackgroundColor: "#b38b6d", // Change point color to #b38b6d
          pointBorderColor: "#b38b6d", // Change point border color to #b38b6d
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "#b38b6d", // Change hover point color to #b38b6d
          pointHoverBorderColor: "#b38b6d", // Change hover point border color to #b38b6d
          fill: false,
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 50,
            }
          }
        }
      }
    });
  
    // Chart.js initialization and configuration for order chart
    const orderChartCanvas = document.getElementById("order-chart").getContext("2d");
    const orderChart = new Chart(orderChartCanvas, {
      type: "bar",
      data: {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        datasets: [{
          label: "Orders",
          data: orderData,
          backgroundColor: "rgba(179, 139, 109, 0.5)", // Change bar color to #b38b6d
          borderColor: "#b38b6d", // Change bar border color to #b38b6d
          borderWidth: 2,
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 3,
            }
          }
        }
      }
    });
  
    // Function to get a random number for live data simulation
    function getRandomNumber() {
      return Math.floor(Math.random() * 100);
    }
  
    // Update the revenue and order chart data at a regular interval (for demonstration)
    setInterval(function() {
      // Generate random data for the revenue and order chart
      const randomRevenueData = revenueData.map(function() {
        return Math.floor(Math.random() * 200);
      });
      const randomOrderData = orderData.map(function() {
        return Math.floor(Math.random() * 15);
      });
  
      // Update the chart data and redraw the charts
      revenueChart.data.datasets[0].data = randomRevenueData;
      revenueChart.update();
  
      orderChart.data.datasets[0].data = randomOrderData;
      orderChart.update();
  
      // Update the total clients, total orders, and revenue ratio values in the dashboard
      document.getElementById("total-clients").textContent = getRandomNumber();
      document.getElementById("total-orders").textContent = getRandomNumber();
      document.getElementById("revenue-ratio").textContent = getRandomNumber() + "%";
    }, 5000); // Update every 5 seconds
  };
  